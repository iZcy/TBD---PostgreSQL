const express = require("express");
const router = express.Router();

const locationController = require("../../controllers/public/locationController");

router.get("/", locationController.getAllLocations);
router.get("/:id", locationController.getLocationById);

module.exports = router;
