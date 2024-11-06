// external imports
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");

// internal imports
const {
  notFoundHaller,
  errorHandler,
} = require("./middleware/common/errorHandler");

const app = express();
dotenv.config();

// database connection
mongoose
  .connect(process.env.DATABASE_CONNECTION_STRING)
  .then(() => console.log("database connection successful"))
  .catch((err) => console.log(err));

// request parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set view engine
app.set("view engine", "ejs");

// set static folder
app.use(express.static(path.join(__dirname, "public")));

// cookei parser
app.use(cookieParser(process.env.COOKIES_SECRET));

// routing setup

// 404 not found handler
app.use(notFoundHaller);

// common error handler
app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
