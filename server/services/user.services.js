const { findByIdAndUpdate } = require("../models/user.js");
const User = require("../models/user.js");
const bcrypt = require("bcrypt");

exports.fetchUserById = async (userId) => {
  try {
    return await this.findUserById(userId);
  } catch (error) {
    throw error;
  }
};

exports.fetchAllUsers = async () => {
  try {
    return await User.find().select("-password");
  } catch (error) {
    throw error;
  }
};

exports.editUserInfo = async (userId, name, surname, email, password) => {
  try {
    const user = await this.findUserById(userId);

    if (!(await bcrypt.compare(password, user.password))) {
      const error = new Error("Invalid password");
      error.statusCode = 401;
      throw error;
    }

    return User.findByIdAndUpdate(
      userId,
      {
        name: name,
        surname: surname,
        email: email,
      },
      { new: true }
    ).select("-password");
  } catch (error) {
    throw error;
  }
};

exports.editUserPassword = async (userId, currentPassword, newPassword) => {
  try {
    const user = await this.findUserById(userId);

    if (!(await bcrypt.compare(currentPassword, user.password))) {
      const error = new Error("Invalid password");
      error.statusCode = 401;
      throw error;
    }

    const hashedPassword = await bcrypt.hash(newPassword, 12);

    await User.findByIdAndUpdate(userId, { password: hashedPassword });
  } catch (error) {
    throw error;
  }
};

exports.findUserById = async (userId) => {
  const user = await User.findById(userId);

  if (!user) {
    const error = new Error("User not found with given id");
    error.statusCode = 404;
    throw error;
  }

  return user;
};
