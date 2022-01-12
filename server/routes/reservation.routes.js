const express = require("express");

const isAuth = require("../middleware/is-auth.js");

const reservationController = require("../controllers/reservation.controllers.js");

const router = express.Router();

router.post("/create", isAuth, reservationController.postCreateReservation);

router.post("/delete", isAuth, reservationController.postDeleteReservation);

module.exports = router;