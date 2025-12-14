import express from "express";
import cors from "cors";
import { MongoClient, ServerApiVersion, ObjectId } from "mongodb";

const app = express();

/* =========================
   ✅ CORS (LOCAL + VERCEL SAFE)
========================= */

const CLIENT_URL = process.env.CLIENT_URL; // prod frontend
const isDev = process.env.NODE_ENV !== "production";

function isAllowedOrigin(origin) {
  if (!origin) return true; // Postman / server-to-server

  // ✅ allow localhost (dev)
  if (isDev && origin.startsWith("http://localhost")) return true;

  // ✅ allow Vercel preview + prod domains
  try {
    const { hostname } = new URL(origin);
    if (hostname.endsWith(".vercel.app")) return true;
  } catch {
    return false;
  }

  // ✅ allow explicit frontend URL
  if (CLIENT_URL && origin === CLIENT_URL) return true;

  return false;
}

app.use(
  cors({
    origin: (origin, cb) => {
      if (isAllowedOrigin(origin)) return cb(null, true);
      return cb(new Error(`CORS blocked: ${origin}`));
    },
    credentials: true,
  })
);

app.use(express.json());

/* =========================
   ✅ MongoDB
========================= */

const uri = process.env.MONGODB_URI;
if (!uri) {
  throw new Error("❌ MONGODB_URI is missing");
}

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let clientPromise;

async function getProductsCollection() {
  if (!clientPromise) clientPromise = client.connect();
  await clientPromise;

  return client.db("electronic_store").collection("products");
}

/* =========================
   ROUTES
========================= */

app.get("/", (req, res) => {
  res.send("Electronic Store Server is running 🚀");
});

app.get("/health", async (req, res) => {
  try {
    const collection = await getProductsCollection();
    await collection.findOne({}, { projection: { _id: 1 } });
    res.send({ ok: true });
  } catch {
    res.status(500).send({ ok: false });
  }
});

/* =========================
   GET PRODUCTS (brand safe)
========================= */
app.get("/products", async (req, res) => {
  try {
    const collection = await getProductsCollection();
    const { brand } = req.query;

    const query = brand
      ? {
          $or: [
            { brand: { $regex: `^${brand}$`, $options: "i" } },
            { brandName: { $regex: `^${brand}$`, $options: "i" } },
          ],
        }
      : {};

    const products = await collection.find(query).toArray();
    res.send(products);
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "Failed to fetch products" });
  }
});

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
  } catch {
    res.status(500).send({ error: "Failed to fetch product" });
  }
});

/* =========================
   ADD PRODUCT
========================= */
app.post("/products", async (req, res) => {
  try {
    const collection = await getProductsCollection();
    const p = req.body;

    const brand = p.brand ?? p.brandName;
    if (!p?.name || !brand) {
      return res.status(400).send({ error: "name and brand are required" });
    }

    const doc = {
      name: p.name,
      brand,
      price: Number(p.price ?? 0),
      rating: Number(p.rating ?? p.rate ?? 0),
      image: p.image ?? "",
      description: p.description ?? p.shortDep ?? "",
      category: p.category ?? p.type ?? "",
      stock: Number(p.stock ?? 0),
      createdAt: new Date(),
    };

    const result = await collection.insertOne(doc);
    res.status(201).send(result);
  } catch {
    res.status(500).send({ error: "Failed to add product" });
  }
});

/* =========================
   DELETE PRODUCT
========================= */
app.delete("/products/:id", async (req, res) => {
  try {
    const collection = await getProductsCollection();
    const { id } = req.params;

    if (!ObjectId.isValid(id)) {
      return res.status(400).send({ error: "Invalid product id" });
    }

    const result = await collection.deleteOne({ _id: new ObjectId(id) });
    res.send(result);
  } catch {
    res.status(500).send({ error: "Failed to delete product" });
  }
});

export default app;
