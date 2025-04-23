import express from "express";
import serverlessExpress from "@codegenie/serverless-express";

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Define routes
app.get("/", (req, res) => {
  res.send("Hello from Express on AWS Lambda!");
});

app.get("/api", (req, res) => {
  res.json({ message: "Welcome to the API!" });
});

// Export the app as a Lambda handler
export const handler = serverlessExpress({ app });