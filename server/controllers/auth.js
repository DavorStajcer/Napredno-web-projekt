import bcrypt from "bcrypt";
import expressValidator from "express-validator";
import jwt from "jsonwebtoken";

import authConfig from "../config/auth.config.js";
import User from "../models/user.js";
import RefreshToken from "../models/jwt-refresh-token.js";

const { validationResult } = expressValidator;

const postRegisterUser = async (req, res, next) => {
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
      const hashedPassword = await bcrypt.hash(password, 12);
      const user = new User({
        email: email,
        name: name,
        surname: surname,
        password: hashedPassword,
      });
      await user.save();
      res.status(200).json({
        confirmation: "success",
        message: "User registered",
      });
    } catch (error) {
      error.statusCode = 500;
      next(error);
    }
  };

  const postLoginUser = async (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    let loadedUser;
    try {
      loadedUser = await User.findOne({ email: email });
      if (!loadedUser) {
        const error = new Error("User not found");
        error.statusCode = 401;
        throw error;
      }
      const isEqual = await bcrypt.compare(password, loadedUser.password);
      if (!isEqual) {
        const error = new Error("Invalid password");
        error.statusCode = 401;
        throw error;
      }
      const token = jwt.sign(
        {
          email: loadedUser.email,
          userId: loadedUser._id.toString(),
        },
        authConfig.secret,
        { expiresIn: authConfig.jwtExpiration }
      );
  
      let refreshToken = await RefreshToken.createToken(loadedUser);
  
      res.status(200).json({
        confirmation: "Success",
        message: "JWT created",
        data: {
          token: token,
          refreshToken: refreshToken,
          userId: loadedUser._id.toString(),
        },
      });
    } catch (error) {
      next(error);
    }
  };

  export default {
    postRegisterUser,
    postLoginUser
  };
  