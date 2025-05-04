import express from 'express';
import {getBoard} from "../controllers/board.js";

const router = express.Router();

router.get("/test", getBoard);

export default router;