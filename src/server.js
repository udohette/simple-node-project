require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Simple Node.js API is running Production Code",
    status: "success",
    runningWith: "PM2 ready",
  });
});

app.get("/health", (req, res) => {
  res.json({
    status: "healthy and Running Well on on Local EC2 Instance",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});

app.post("/hello", (req, res) => {
  const name = req.body.name || "Friend";

  res.json({
    message: `Hello, ${name}!`,
    receivedData: req.body,
  });
});

app.use((req, res) => {
  res.status(404).json({
    status: "error",
    message: "Route not found",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
