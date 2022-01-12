const {
  createReservation,
  deleteReservation,
  fetchUserReservations
} = require("../services/reservation.services.js");

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

exports.postDeleteReservation = async (req, res, next) => {
  const userId = req.userId;
  const { reservationId } = req.body;

  try {
    await deleteReservation(userId, reservationId);
    res.status(200).json({
      confirmation: "success",
      message: "Reservation deleted",
    });
  } catch (error) {
    next(error);
  }
};

exports.getFetchUserReservations = async (req, res, next) => {
    const userId = req.userId;

    try {
        const reservations = await fetchUserReservations(userId);
        res.status(200).json({
            confirmation: "success",
            message: "Fetched user reservations",
            data: {
              reservations: reservations
            },
          });
    } catch (error) {
        throw error;
    }
}
