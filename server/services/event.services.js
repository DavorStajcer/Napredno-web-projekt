const Event = require("../models/event.js");

exports.createEvent = async (
  name,
  description,
  location,
  date,
  maxAttendees,
  adminName,
  adminSurname,
  adminId
) => {
  try {
    const event = new Event({
      name: name,
      description: description,
      location: location,
      date: new Date(date),
      maxAttendees: maxAttendees,
      adminName: adminName,
      adminSurname: adminSurname,
      adminId: adminId,
    });
    await event.save();
  } catch (error) {
    throw error;
  }
};
