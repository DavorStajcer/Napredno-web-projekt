const Reservation = require("../models/reservation.js");
const Event = require("../models/event.js");
const User = require("../models/user.js");

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

exports.deleteReservation = async (userId, reservationId) => {
  try {
    const reservation = await Reservation.findById(reservationId);

    if (!reservation) {
      const error = new Error("Reservation not found");
      error.statusCode = 404;
      throw error;
    }

    if (reservation.userId !== userId) {
      const error = new Error("Reservation not found");
      error.statusCode = 403;
      throw error;
    }

    await Event.findByIdAndUpdate(reservation.eventId, { $inc: { count: -1 } });
    await Reservation.findByIdAndDelete(reservationId);
  } catch (error) {
    throw error;
  }
};

exports.fetchUserReservations = async (userId) => {
  try {
    let reservations = await Reservation.find({ userId: userId }).lean().select("-__v");

    reservations = await Promise.all(
      reservations.map(async (reservation) => {
        const eventData = await Event.findById(reservation.eventId)
          .lean()
          .select("-_id -__v");
        const adminData = await User.findById(eventData.adminId)
          .lean()
          .select("-_id -password -admin -__v");
        return {
          ...reservation,
          eventData: { ...eventData },
          adminData: { ...adminData },
        };
      })
    );

    return reservations;
  } catch (error) {
    throw error;
  }
};
