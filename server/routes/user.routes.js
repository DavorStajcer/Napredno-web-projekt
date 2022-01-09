const express = require("express");

const userController = require("../controllers/user.controllers.js");

const router = express.Router();

router.post("/fetch", userController.postFetchUserById);

router.get("/fetch-all", userController.getFetchAllUsers);

router.post("/edit", userController.postEditUserInfo);

router.post("/edit-password", userController.postEditUserPassword)

module.exports = router;