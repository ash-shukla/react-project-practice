import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "../backend/config/db.js";
import products from "../backend/data/products.js";

const port = process.env.PORT || 5000;
connectDB(); // connection to mongoDB
const app = express();

app.get("/", (req, res) => {
  res.send("API Running...");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((x) => x._id === req.params.id);
  res.json(product);
});

app.listen(port, () => console.log(`Server running on port ${port}`));
