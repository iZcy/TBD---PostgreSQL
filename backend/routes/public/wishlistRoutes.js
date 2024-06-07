const express = require("express");
const router = express.Router();

const wishlistController = require("../../controllers/public/wishlistController");

router.get("/", wishlistController.getAllWishlists);
router.get("/:id", wishlistController.getWishlistById);

module.exports = router;
