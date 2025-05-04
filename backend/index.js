import express from "express";
import userRouter from "./routes/user.js";
import boardRouter from "./routes/board.js";
import pinRouter from "./routes/pin.js";
import commentRouter from "./routes/comment.js";
import connectDB from "./utils/connectDb.js";

const app = express();

app.use(express.json());
app.use("/api/users", userRouter);
app.use("/api/boards", boardRouter);
app.use("/api/pins", pinRouter);
app.use("/api/comments", commentRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on http://localhost:${PORT}`);
});