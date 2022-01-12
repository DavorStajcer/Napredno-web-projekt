const Event = require("../models/event.js");
const User = require("../models/user.js");

exports.createEvent = async (
  name,
  description,
  location,
  date,
  maxAttendees,
  adminId,
  imageUrl
) => {
  try {
    const event = new Event({
      name: name,
      description: description,
      location: location,
      date: new Date(date),
      maxAttendees: maxAttendees,
      adminId: adminId,
      imageUrl: imageUrl,
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
  maxAttendees,
  imageUrl,
  adminId
) => {
  try {
    const event = await Event.findById(eventId);

    if (!event) {
      const error = new Error("Event not found in database");
      error.code = 404;
      throw error;
    }

    if (event.adminId.toString() !== adminId) {
      const error = new Error("User has no permission to edit");
      error.statusCode = 401;
      throw error;
    }

    const doc = await Event.findOneAndUpdate(
      { _id: eventId },
      {
        name: name,
        description: description,
        location: location,
        date: date,
        maxAttendees: maxAttendees,
        imageUrl: imageUrl
      }
    );
  } catch (error) {
    throw error;
  }
};

exports.deleteEvent = async (eventId, adminId) => {
  try {
    const event = await Event.findById(eventId);

    if (!event) {
      const error = new Error("Event not found in database");
      error.code = 404;
      throw error;
    }

    if (event.adminId.toString() !== adminId) {
      const error = new Error("User has no permission to delete");
      error.statusCode = 401;
      throw error;
    }

    const deletedEvent = await Event.findOneAndDelete({
      _id: eventId,
    });
  } catch (error) {
    throw error;
  }
};

exports.fetchEventById = async (eventId) => {
  try {
    let event = await Event.findById(eventId).lean().select("-__v");
    if (!event) {
      const error = new Error("Event not found in database");
      error.code = 404;
      throw error;
    }
    const user = await User.findById(event.adminId).lean().select("-password");
    if (!user) {
      const error = new Error("User not found in database");
      error.code = 404;
      throw error;
    }
    return {
      ...event,
      userName: user.name,
      userSurname: user.surname,
      userEmail: user.email,
    };
  } catch (error) {
    throw error;
  }
};

exports.fetchAllFutureEvents = async () => {
  const currentDate = new Date().toISOString();
  try {
    let events = await Event.find({ date: { $gte: currentDate } })
      .lean()
      .select("-__v");

    events = await Promise.all(
      events.map(async (event) => {
        const user = await User.findById(event.adminId.toString())
          .lean()
          .select("-password");

        return {
          ...event,
          userName: user.name,
          userSurname: user.surname,
          userEmail: user.email,
        };
      })
    );
    return events;
  } catch (error) {
    throw error;
  }
};

exports.fetchUserEvents = async (adminId) => {
  try {
    return await Event.find({ adminId: adminId });
  } catch (error) {
    throw error;
  }
};