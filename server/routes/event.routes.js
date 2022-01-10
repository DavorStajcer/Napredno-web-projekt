const express = require("express");

const isAuth = require("../middleware/is-auth.js");

const eventController = require("../controllers/event.controllers.js");

const router = express.Router();

router.post("/create", isAuth, eventController.postCreateEvent);

router.post("/edit", isAuth, eventController.postEditEvent);

router.post("/delete", eventController.postDeleteEvent);

router.get("/fetch-all", eventController.getFetchAllEvents);

router.post("/fetch-one", eventController.postFetchEventById);

router.post("/fetch-users", eventController.postFetchUserEvents);

module.exports = router;