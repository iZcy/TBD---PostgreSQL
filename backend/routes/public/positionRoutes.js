const express = require("express");
const router = express.Router();

const positionController = require("../../controllers/public/positionController");

router.get("/", positionController.getAllPositions);
router.get("/:id", positionController.getPositionById);

module.exports = router;
