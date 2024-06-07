const express = require("express");
const router = express.Router();

const locationController = require("../../controllers/public/locationController");

router
  .post("/", locationController.addLocation)
  .get("/", locationController.getAllLocations);
router
  .get("/:id", locationController.getLocationById)
  .put("/:id", locationController.updateLocation)
  .delete("/:id", locationController.deleteLocation);

module.exports = router;
