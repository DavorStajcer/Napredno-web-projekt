const express = require("express");

const eventController = require("../controllers/event.controllers.js");

const router = express.Router();

router.post("/create", eventController.postCreateEvent);

router.post("/edit", eventController.postEditEvent);

router.post("/delete", eventController.postDeleteEvent);

router.get("/fetch-all", eventController.getFetchAllEvents);

router.post("/fetch-one", eventController.postFetchOneEvent);

router.post("/fetch-users", eventController.postFetchUserEvents);

module.exports = router;