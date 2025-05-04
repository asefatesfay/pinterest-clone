import express from "express";

const app = express();

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello from Express-V2!");
});

app.get("/api", (req, res) => {
  res.json({ message: "Welcome to the API!" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});