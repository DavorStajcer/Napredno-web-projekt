const { createReservation } = require("../services/reservation.services.js");

exports.postCreateReservation = async (req, res, next) => {
  const userId = req.userId;
  const { eventId } = req.body;

  try {
    await createReservation(userId, eventId);
    res.status(200).json({
      confirmation: "success",
      message: "Reservation created",
    });
  } catch (error) {
    next(error);
  }
};
