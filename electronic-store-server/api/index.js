import express from "express";
import cors from "cors";
import { MongoClient, ServerApiVersion, ObjectId } from "mongodb";

const app = express();

// ✅ middleware
const allowedOrigins = [process.env.CLIENT_URL].filter(Boolean);

app.use(
  cors({
    origin: (origin, cb) => {
      if (!origin) return cb(null, true); // Postman/Server-to-server
      if (allowedOrigins.length === 0) return cb(null, true); // fallback
      return allowedOrigins.includes(origin)
        ? cb(null, true)
        : cb(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);

app.use(express.json());

// ✅ MongoDB
const uri = process.env.MONGODB_URI;
if (!uri) {
  throw new Error(
    "MONGODB_URI is missing. Add it in Vercel Environment Variables."
  );
}

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let clientPromise;

// ✅ serverless-friendly connection helper
async function getProductsCollection() {
  if (!clientPromise) clientPromise = client.connect();
  await clientPromise;

  const db = client.db("electronic_store");
  return db.collection("products");
}

// ✅ ROOT TEST
app.get("/", (req, res) => {
  res.send("Electronic Store Server is running 🚀");
});

// ✅ HEALTH CHECK
app.get("/health", async (req, res) => {
  try {
    const collection = await getProductsCollection();
    await collection.findOne({}, { projection: { _id: 1 } });
    res.send({ ok: true });
  } catch (e) {
    res.status(500).send({ ok: false });
  }
});

/**
 * ✅ GET /products
 * Optional query:
 *  - brand: /products?brand=Samsung
 *
 * ✅ FIX: supports both `brand` and old `brandName`
 */
app.get("/products", async (req, res) => {
  try {
    const collection = await getProductsCollection();

    const { brand } = req.query;

    const query = brand
      ? {
          $or: [
            { brand: { $regex: `^${brand}$`, $options: "i" } },
            { brandName: { $regex: `^${brand}$`, $options: "i" } }, // ✅ old schema support
          ],
        }
      : {};

    const products = await collection.find(query).toArray();
    res.send(products);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Failed to fetch products" });
  }
});

/**
 * ✅ GET /products/:id
 */
app.get("/products/:id", async (req, res) => {
  try {
    const collection = await getProductsCollection();
    const { id } = req.params;

    if (!ObjectId.isValid(id)) {
      return res.status(400).send({ error: "Invalid product id" });
    }

    const product = await collection.findOne({ _id: new ObjectId(id) });

    if (!product) {
      return res.status(404).send({ error: "Product not found" });
    }

    res.send(product);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Failed to fetch product" });
  }
});

/**
 * ✅ POST /products
 * Add a single product
 *
 * ✅ FIX: accepts both brand / brandName and normalizes to `brand`
 * ✅ FIX: accepts old rating fields (rate) and description fields (shortDep)
 */
app.post("/products", async (req, res) => {
  try {
    const collection = await getProductsCollection();
    const product = req.body;

    const incomingBrand = product?.brand ?? product?.brandName;

    if (!product?.name || !incomingBrand) {
      return res.status(400).send({ error: "name and brand are required" });
    }

    const doc = {
      name: product.name,
      brand: incomingBrand, // ✅ normalized
      price: Number(product.price ?? 0),
      rating: Number(product.rating ?? product.rate ?? 0),
      image: product.image ?? "",
      description: product.description ?? product.shortDep ?? "",
      category: product.category ?? product.type ?? "",
      stock: Number(product.stock ?? 0),
      createdAt: new Date(),
    };

    const result = await collection.insertOne(doc);
    res.status(201).send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Failed to add product" });
  }
});

/**
 * ✅ POST /products/bulk
 *
 * ✅ FIX: accepts both brand / brandName and normalizes to `brand`
 */
app.post("/products/bulk", async (req, res) => {
  try {
    const collection = await getProductsCollection();
    const products = req.body;

    if (!Array.isArray(products) || products.length === 0) {
      return res.status(400).send({ error: "Body must be a non-empty array" });
    }

    const invalid = products.find(
      (p) => !p?.name || !(p?.brand ?? p?.brandName)
    );
    if (invalid) {
      return res
        .status(400)
        .send({ error: "Each product must have name and brand" });
    }

    const docs = products.map((p) => ({
      name: p.name,
      brand: p.brand ?? p.brandName,
      price: Number(p.price ?? 0),
      rating: Number(p.rating ?? p.rate ?? 0),
      image: p.image ?? "",
      description: p.description ?? p.shortDep ?? "",
      category: p.category ?? p.type ?? "",
      stock: Number(p.stock ?? 0),
      createdAt: new Date(),
    }));

    const result = await collection.insertMany(docs);
    res.status(201).send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Failed to bulk add products" });
  }
});

/**
 * ✅ DELETE /products/:id
 */
app.delete("/products/:id", async (req, res) => {
  try {
    const collection = await getProductsCollection();
    const { id } = req.params;

    if (!ObjectId.isValid(id)) {
      return res.status(400).send({ error: "Invalid product id" });
    }

    const result = await collection.deleteOne({ _id: new ObjectId(id) });
    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Failed to delete product" });
  }
});

export default app;
