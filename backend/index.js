import express from "express";
import { connectDb } from "./configs/db.js";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use("/api/auth", authRoutes);

app.listen(3000, () => {
  connectDb();
  console.log("Server is running on port 3000");
});
