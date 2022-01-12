const {
  createEvent,
  editEvent,
  deleteEvent,
  fetchEventById,
  fetchAllFutureEvents,
  fetchUserEvents,
} = require("../services/event.services.js");

exports.postCreateEvent = async (req, res, next) => {
  const { name, description, location, date, maxAttendees, imageUrl } =
    req.body;

  const adminId = req.userId;

  try {
    await createEvent(
      name,
      description,
      location,
      date,
      maxAttendees,
      adminId,
      imageUrl
    );
    res.status(200).json({
      confirmation: "success",
      message: "Event created",
    });
  } catch (error) {
    next(error);
  }
};

exports.postEditEvent = async (req, res, next) => {
  const { eventId, name, description, location, date, maxAttendees, imageUrl } = req.body;

  const adminId = req.userId;

  try {
    await editEvent(
      eventId,
      name,
      description,
      location,
      date,
      maxAttendees,
      imageUrl,
      adminId
    );
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
  const adminId = req.userId;

  try {
    await deleteEvent(eventId, adminId);
    res.status(200).json({
      confirmation: "success",
      message: "Event deleted",
    });
  } catch (error) {
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
    next(error);
  }
};

exports.getFetchAllEvents = async (req, res, next) => {
  try {
    const events = await fetchAllFutureEvents();
    res.status(200).json({
      confirmation: "success",
      message: "All events fetched",
      data: {
        events: events,
      },
    });
  } catch (error) {
    next(error);
  }
};

exports.postFetchUserEvents = async (req, res, next) => {
  const adminId = req.userId;

  try {
    const events = await fetchUserEvents(adminId);
    res.status(200).json({
      confirmation: "success",
      message: "All user events fetched",
      data: {
        events: events,
      },
    });
  } catch (error) {
    next(error);
  }
};
