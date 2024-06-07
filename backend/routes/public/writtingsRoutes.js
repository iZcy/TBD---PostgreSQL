const express = require("express");
const router = express.Router();

const writtingsController = require("../../controllers/public/writtingsController");

router.get("/", writtingsController.getAllWrittings);
router.get("/:id", writtingsController.getWrittingById);

module.exports = router;
