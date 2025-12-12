import express from "express";
import cors from "cors";
import { MongoClient, ServerApiVersion } from "mongodb";

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// MongoDB
const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let productsCollection;

async function connectDB() {
  if (productsCollection) return;

  await client.connect();
  const db = client.db("electronic_store");
  productsCollection = db.collection("products");
}

// ROOT TEST
app.get("/", (req, res) => {
  res.send("Electronic Store Server is running 🚀");
});

// PRODUCTS ROUTE
app.get("/products", async (req, res) => {
  try {
    await connectDB();
    const products = await productsCollection.find().toArray();
    res.send(products);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Failed to fetch products" });
  }
});

// ❌ NO app.listen()
// ✅ EXPORT app
export default app;
