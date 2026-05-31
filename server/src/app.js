const express = require("express");
const cors = require("cors");

const messageRoutes = require("./routes/messageRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", messageRoutes);

app.listen(8000, "0.0.0.0", () => {
  console.log("Server running on port 8000");
});