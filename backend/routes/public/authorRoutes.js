const express = require("express");
const router = express.Router();
const authorController = require("../../controllers/public/authorController");

router.get("/", authorController.getAllAuthors);
router.get("/:id", authorController.getAuthorById);

module.exports = router;
