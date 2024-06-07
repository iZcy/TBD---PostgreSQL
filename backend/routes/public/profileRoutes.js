const express = require("express");
const router = express.Router();

const profileController = require("../../controllers/public/profileController");

router.get("/", profileController.getAllProfiles);
router.get("/:id", profileController.getProfileById);

module.exports = router;
