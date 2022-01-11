const expressValidator = require("express-validator");

const { registerUser, loginUser, refreshToken } = require('../services/auth.services.js');

exports.postRegisterUser = async (req, res, next) => {
/*     const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const error = new Error("Validation failed");
      error.statusCode = 422;
      return next(error);
    } */
  
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
    const surname = req.body.surname;
    try {
      await registerUser(email, name, surname, password);
      res.status(200).json({
        confirmation: "success",
        message: "User registered",
      });
    } catch (error) {
      error.statusCode = 404;
      next(error);
    }

  };

  exports.postLoginUser = async (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    try {
      const data = await loginUser(email, password);
  
      res.status(200).json({
        confirmation: "Success",
        message: "JWT created",
        data: data,
      });
    } catch (error) {
      next(error);
    }
  };

  exports.postRefreshToken = async (req, res, next) => {
    const { refreshToken: requestToken } = req.body;
    if (requestToken == null) {
      const err = new Error("Refresh Token is required!");
      err.statusCode = 403;
      return next(err);
    }
    try {
      const data = await refreshToken(requestToken);
  
      return res.status(200).json({
        confirmation: "success",
        data: data,
      });
    } catch (error) {
      next(error);
    }
  };

  