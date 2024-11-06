const createError = require("http-errors");

// 404 not found handler
const notFoundHaller = (req, res, next) => {
  next(createError(404, "Your requested URL was not found!"));
};

// default error handler
const errorHandler = (err, req, res, next) => {
  res.render("error", {
    title: "Error Page",
  });
};

module.exports = {
  notFoundHaller,
  errorHandler,
};
