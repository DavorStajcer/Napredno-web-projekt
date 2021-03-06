const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const eventSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  maxAttendees: {
    type: Number,
    required: true,
  },
  count: {
    type: Number,
    default: 0,
  },
  adminId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Event", eventSchema);
