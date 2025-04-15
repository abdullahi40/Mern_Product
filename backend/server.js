import express from "express";
import dotenv from "dotenv";
import path from "path";
import cors from "cors"; // importing cors with import

import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

console.log(process.env.MONGO_URI);

const __dirname = path.resolve();

<<<<<<< HEAD
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
=======
// Enable CORS only for your frontend URL
app.use(cors({
  origin: 'https://mern-product-iota.vercel.app',
  credentials: true 
}));
>>>>>>> c0bd42c9797da19d41b87e022e9bd64413ecc0b8

app.use(express.json()); // allows us to accept JSON data in the req.body

app.use("/api/products", productRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}

app.listen(PORT, () => {
  connectDB();
  console.log("Server started at http://localhost:" + PORT);
});
