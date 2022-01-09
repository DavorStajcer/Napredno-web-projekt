const express = require("express");

const userController = require("../controllers/user.controllers.js");

const router = express.Router();

router.post("/fetch", userController.postFetchUserById);

router.get("/fetch-all", userController.getFetchAllUsers);

router.post("/edit", userController.postEditUser);

module.exports = router;