const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const reservationSchema = new Schema({
  userId: {
    type: String,
    required: true
  },
  eventId: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Reservation", reservationSchema);
