const express = require("express");
const router = express.Router();

const stockController = require("../../controllers/public/stockController");

router.get("/", stockController.getAllStocks);
router.get("/:id", stockController.getStockById);

module.exports = router;
