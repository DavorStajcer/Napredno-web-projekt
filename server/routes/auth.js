import express from "express";

import authContoller from "../controllers/auth.js";
import User from "../models/user.js";

const router = express.Router();

router.post("/register-user", authContoller.postRegisterUser);

router.post("/login", authContoller.postLoginUser);

export default router;