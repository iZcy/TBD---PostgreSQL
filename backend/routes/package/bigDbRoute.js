const express = require("express");
const router = express.Router();
const bigDbController = require("../../controllers/package/bigDbController");

router.get("/", bigDbController.getAllDbWithFilter);

module.exports = router;
