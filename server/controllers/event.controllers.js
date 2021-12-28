const { createEvent } = require("../services/event.services.js");

exports.postCreateEvent = async (req, res, next) => {
  const {
    name,
    description,
    location,
    date,
    maxAttendees,
    adminName,
    adminSurname,
    adminId,
  } = req.body;

  try {
    await createEvent(
      name,
      description,
      location,
      date,
      maxAttendees,
      adminName,
      adminSurname,
      adminId
    );
    res.status(200).json({
      confirmation: "success",
      message: "Event created",
    });
  } catch (error) {
    error.statusCode = 500;
    next(error);
  }
};
