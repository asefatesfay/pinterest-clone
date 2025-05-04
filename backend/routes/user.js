import express from 'express';
import {getUser} from "../controllers/user.js";

const router = express.Router();

router.post("/create", (req, res) => {
    const userInfo = req.body;
    console.log(userInfo);
});

router.get("/test", getUser);

export default router;