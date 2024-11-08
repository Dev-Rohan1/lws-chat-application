// external imports
const express = require("express");

const router = express.Router();

// internal imports
const getInboxController = require("../controller/getInboxController");
const decoratedHtmlResponse = require("../middleware/common/decoratedHtmlResponse");

// inbox page
router.get("/", decoratedHtmlResponse("Inbox"), getInboxController);

module.exports = router;
