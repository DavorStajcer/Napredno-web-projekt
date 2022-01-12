const Reservation = require("../models/reservation.js");
const Event = require("../models/event.js");

exports.createReservation = async (userId, eventId) => {
  try {
    const event = await Event.findById(eventId);

    if (!event) {
      const error = new Error("Event not found");
      error.statusCode = 404;
      throw error;
    }

    if (event.count >= event.maxAttendees) {
      const error = new Error("Event not reservable, max attendees reached");
      error.statusCode = 403;
      throw error;
    }

    const reservation = new Reservation({
      userId: userId,
      eventId: eventId,
    });

    await reservation.save();

    await Event.findByIdAndUpdate(eventId, { $inc: { count: 1 } });
  } catch (error) {
    throw error;
  }
};


