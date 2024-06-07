const express = require("express");
const router = express.Router();

const wishlistController = require("../../controllers/public/wishlistController");

router
  .get("/", wishlistController.getAllWishlists)
  .post("/", wishlistController.addWishlist);
router.get("/:id", wishlistController.getWishlistById);

router.delete("/:customerId/:bookId", wishlistController.deleteWishlist);

module.exports = router;
