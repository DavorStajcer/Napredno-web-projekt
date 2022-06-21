const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const authRoutes = require("./routes/auth.routes.js");
const eventRoutes = require("./routes/event.routes.js");
const userRoutes = require("./routes/user.routes.js");
const reservationRoutes = require("./routes/reservation.routes.js");

const MONGODB_URI =
  "mongodb+srv://dacalino:popovaca1234@cluster0.jqocpnp.mongodb.net/?retryWrites=true&w=majority";

const app = express();

app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/api/auth", authRoutes);
app.use("/api/event", eventRoutes);
app.use("/api/user", userRoutes);
app.use("/api/reservation", reservationRoutes);

app.use((err, req, res, next) => {
  const status = err.statusCode || 500;
  const message = err.message;
  res.status(status).json({
    confirmation: "fail",
    message: message,
  });
});

mongoose
  .connect(MONGODB_URI)
  .then((result) => {
    app.listen(8000);
  })
  .catch((err) => {
    console.log(err);
  });
