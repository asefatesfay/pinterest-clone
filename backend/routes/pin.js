import express from 'express';
import {getPin} from "../controllers/pin.js";

const router = express.Router();

router.get("/test", getPin);

export default router;