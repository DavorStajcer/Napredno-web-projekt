const { fetchUserById, fetchAllUsers, editUserInfo } = require("../services/user.services.js");

exports.postFetchUserById = async (req, res, next) => {
  const { userId } = req.body;

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
}

exports.postEditUser = async (req, res, next) => {
  const { userId, name, surname, email, password } = req.body;

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
}
