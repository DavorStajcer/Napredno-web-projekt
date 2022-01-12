const express = require("express");

const isAuth = require("../middleware/is-auth.js");

const userController = require("../controllers/user.controllers.js");

const router = express.Router();

router.get("/fetch", isAuth, userController.getFetchUser);

router.get("/fetch-all", userController.getFetchAllUsers);

router.post("/edit", isAuth, userController.postEditUserInfo);

router.post("/edit-password", isAuth, userController.postEditUserPassword);

module.exports = router;
