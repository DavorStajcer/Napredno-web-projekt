const express = require("express");

const eventController = require("../controllers/event.controllers.js");

const router = express.Router();

router.post("/create", eventController.postCreateEvent);

module.exports = router;