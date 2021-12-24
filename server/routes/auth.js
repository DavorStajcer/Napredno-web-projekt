const express = require("express");

const authContoller = require("../controllers/auth.js");
const User = require("../models/user.js");

const router = express.Router();

router.post("/register-user", authContoller.postRegisterUser);

router.post("/login", authContoller.postLoginUser);

router.post("/refresh-token", authContoller.postRefreshToken);

module.exports = router;