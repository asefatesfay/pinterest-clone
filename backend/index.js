const express = require("express");
const serverless = require("aws-lambda-ric");

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Define routes
app.get("/", (req, res) => {
  res.send("Hello from Express on AWS Lambda-1!");
});

app.get("/api", (req, res) => {
  res.json({ message: "Welcome to the API!" });
});

// Export the app as a Lambda handler
exports.handler = serverless.express(app);