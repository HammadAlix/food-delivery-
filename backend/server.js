import express from "express";
import cors from "cors";
import serverless from "serverless-http";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import UserRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect DB
connectDB();

// Routes
app.use("/api/food", foodRouter);
app.use("/uploads", express.static("uploads"));
app.use("/api/user", UserRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

// Test route
app.get("/", (req, res) => {
  res.send("API Working");
});

// Export for Vercel serverless
export default serverless(app);

