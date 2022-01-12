const {
  fetchUserById,
  fetchAllUsers,
  editUserInfo,
  editUserPassword
} = require("../services/user.services.js");

exports.getFetchUser = async (req, res, next) => {
  const userId = req.userId;
  try {
    const userData = await fetchUserById(userId);
    res.status(200).json({
      confirmation: "success",
      message: "Fetched user profile",
      data: {
        user: userData,
      },
    });
  } catch (error) {
    error.statusCode = 500;
    next(error);
  }
};

exports.getFetchAllUsers = async (req, res, next) => {
  try {
    const users = await fetchAllUsers();
    res.status(200).json({
      confirmation: "success",
      message: "Fetched all users",
      data: {
        users: users,
      },
    });
  } catch (error) {
    error.statusCode = 500;
    next(error);
  }
};

exports.postEditUserInfo = async (req, res, next) => {
  const { name, surname, email, password } = req.body;
  const userId = req.userId;
  try {
    const user = await editUserInfo(userId, name, surname, email, password);
    res.status(200).json({
      confirmation: "success",
      message: "Edited user info",
      data: {
        user: user,
      },
    });
  } catch (error) {
    error.statusCode = 500;
    next(error);
  }
};

exports.postEditUserPassword = async (req, res, next) => {
  const { currentPassword, newPassword } = req.body;
  const userId = req.userId;
  try {
    await editUserPassword(userId, currentPassword, newPassword);
    res.status(200).json({
      confirmation: "success",
      message: "Edited user password",
    });
  } catch (error) {
    error.statusCode = 500;
    next(error);
  }
};
