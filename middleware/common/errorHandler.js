const createError = require("http-errors");

// not found handler
const notFoundErrorHandler = (req, res, next) => {
  next(createError(404, "Your requested url was not found!"));
};

// defult error handler
const errorHandler = (err, req, res, next) => {
  res.locals.error =
    process.env.NODE_ENV === "development" ? err : { message: err.message };

  res.status(err.status || 500);

  if (res.locals.html) {
    // html respone
    res.render("error", {
      title: "Error Page",
    });
  } else {
    // json response
    res.json(res.locals.error);
  }
};

module.exports = {
  notFoundErrorHandler,
  errorHandler,
};
