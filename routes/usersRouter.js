// external imports
const express = require("express");

const router = express.Router();

// internal imports
const getUsersController = require("../controller/getUsersController");
const decoratedHtmlResponse = require("../middleware/common/decoratedHtmlResponse");

// users page
router.get("/", decoratedHtmlResponse("Users"), getUsersController);

module.exports = router;
