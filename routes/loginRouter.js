// external imports
const express = require("express");

const router = express.Router();

// internal imports
const getLoginController = require("../controller/getLoginController");
const decoratedHtmlResponse = require("../middleware/common/decoratedHtmlResponse");

// login page
router.get("/", decoratedHtmlResponse("Login"), getLoginController);

module.exports = router;
