const {
  createEvent,
  editEvent,
  deleteEvent,
  fetchEventById,
  fetchAllEvents,
  fetchUserEvents,
} = require("../services/event.services.js");

exports.postCreateEvent = async (req, res, next) => {
  const { name, description, location, date, maxAttendees } = req.body;

  const adminId = req.userId;

  console.log(adminId, 'admin id');

  try {
    await createEvent(name, description, location, date, maxAttendees, adminId);
    res.status(200).json({
      confirmation: "success",
      message: "Event created",
    });
  } catch (error) {
    next(error);
  }
};

exports.postEditEvent = async (req, res, next) => {
  const { eventId, name, description, location, date, maxAttendees } = req.body;

  const adminId = req.userId;

  try {
    await editEvent(eventId, name, description, location, date, maxAttendees, adminId);
    res.status(200).json({
      confirmation: "success",
      message: "Event edited",
    });
  } catch (error) {
    next(error);
  }
};

exports.postDeleteEvent = async (req, res, next) => {
  const { eventId } = req.body;

  try {
    await deleteEvent(eventId);
    res.status(200).json({
      confirmation: "success",
      message: "Event deleted",
    });
  } catch (error) {
    error.statusCode = 500;
    next(error);
  }
};

exports.postFetchEventById = async (req, res, next) => {
  const { eventId } = req.body;

  try {
    const event = await fetchEventById(eventId);
    res.status(200).json({
      confirmation: "success",
      message: "Event fetched",
      data: {
        event: event,
      },
    });
  } catch (error) {
    error.statusCode = 500;
    next(error);
  }
};

exports.getFetchAllEvents = async (req, res, next) => {
  try {
    const events = await fetchAllEvents();
    res.status(200).json({
      confirmation: "success",
      message: "All events fetched",
      data: {
        events: events,
      },
    });
  } catch (error) {
    error.statusCode = 500;
    next(error);
  }
};

exports.postFetchUserEvents = async (req, res, next) => {
  const { userId } = req.body;

  try {
    const events = await fetchUserEvents(userId);
    res.status(200).json({
      confirmation: "success",
      message: "All user events fetched",
      data: {
        events: events,
      },
    });
  } catch (error) {
    error.statusCode = 500;
    next(error);
  }
};
