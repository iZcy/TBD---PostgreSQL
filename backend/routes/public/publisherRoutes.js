const express = require("express");
const router = express.Router();

const publisherController = require("../../controllers/public/publisherController");

router.get("/", publisherController.getAllPublishers);
router.get("/:id", publisherController.getPublisherById);

module.exports = router;
