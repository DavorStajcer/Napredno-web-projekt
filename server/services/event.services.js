const Event = require("../models/event.js");

exports.createEvent = async (
  name,
  description,
  location,
  date,
  maxAttendees,
  adminId
) => {
  try {
    const event = new Event({
      name: name,
      description: description,
      location: location,
      date: new Date(date),
      maxAttendees: maxAttendees,
      adminId: adminId,
    });
    await event.save();
  } catch (error) {
    throw error;
  }
};

exports.editEvent = async (
  eventId,
  name,
  description,
  location,
  date,
  maxAttendees
) => {
  try {
    const doc = await Event.findOneAndUpdate(
      { _id: eventId },
      {
        name: name,
        description: description,
        location: location,
        date: date,
        maxAttendees: maxAttendees,
      }
    );
  } catch (error) {
    throw error;
  }
};

exports.deleteEvent = async (eventId) => {
  try {
    const doc = await Event.findOneAndDelete({
      _id: eventId,
    });
  } catch (error) {
    throw error;
  }
};

exports.fetchEventById = async (eventId) => {
  try {
    return await Event.findById(eventId);
  } catch (error) {
    throw error;
  }
};

exports.fetchAllEvents = async () => {
  const currentDate = new Date().toISOString();
  try {
    return await Event.find({ date: { $gte: currentDate } });
  } catch (error) {
    throw error;
  }
};

exports.fetchUserEvents = async (userId) => {
  try {
    return await Event.find({ adminId: userId });
  } catch (error) {
    throw error;
  }
};
