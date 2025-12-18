const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const eventRoutes = require("./routes/eventRoutes");

const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));


// routes
app.use("/api/auth", authRoutes);
app.use("/api/events", eventRoutes);

// mongo connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("Mongo error:", err.message));


  app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});


// server start
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
