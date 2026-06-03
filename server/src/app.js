import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import messageRoutes from "./routes/messageRoutes.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/messages", messageRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("QueryHive API Running");
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});