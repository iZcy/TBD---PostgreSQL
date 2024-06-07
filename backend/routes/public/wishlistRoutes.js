const express = require("express");
const router = express.Router();

const wishlistController = require("../../controllers/public/wishlistController");
const sqlTransactionsController = require("../../controllers/package/sqlTransactionsController");

router
  .get("/", wishlistController.getAllWishlists)
  .post("/", wishlistController.addWishlist);
router.get("/:id", wishlistController.getWishlistById);

router.delete("/:customerId/:bookId", wishlistController.deleteWishlist);
// router.get(
//   "/buy/:customerId/:bookId",
//   sqlTransactionsController.turnWishlistToBuy
// );

module.exports = router;
