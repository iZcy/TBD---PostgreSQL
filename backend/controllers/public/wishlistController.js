const wishlistQuery = require("../../database/public/wishlistQuery");

const getAllWishlists = async (req, res, next) => {
  try {
    let data;

    data = await wishlistQuery.getAllWishlists();

    if (data.rowCount === 0) {
      res.status(404);
      throw new Error("Data not found!");
    }

    return res.status(200).json({ data: data.rows });
  } catch (err) {
    next(err);
  }
};

const getWishlistById = async (req, res, next) => {
  try {
    const id = req.params.id;
    let data;

    data = await wishlistQuery.getWishlistById(id);

    if (data.rowCount === 0) {
      res.status(404);
      throw new Error("Data not found!");
    }

    return res.status(200).json({ data: data.rows });
  } catch (err) {
    next(err);
  }
};

const addWishlist = async (req, res, next) => {
  try {
    // get the wishlist object from the request
    const wishlist = req.body;

    // ensure that the wishlist object is not null
    if (!wishlist) {
      res.status(400);
      throw new Error("Wishlist object is null");
    }

    // ensure the wishlist object is not empty
    if (Object.keys(wishlist).length === 0) {
      res.status(400);
      throw new Error("Wishlist object is empty");
    }

    // ensure the wishlist object doesn't have any invalid properties
    const validKeys = ["_customer", "_book"];
    const invalidKeys = Object.keys(wishlist).filter(
      (key) => !validKeys.includes(key)
    );
    if (invalidKeys.length > 0) {
      res.status(400);
      throw new Error(
        `Invalid wishlist fields provided for update: ${invalidKeys.join(", ")}`
      );
    }

    // ensure the wishlist object has all required properties
    if (!wishlist._customer || !wishlist._book) {
      res.status(400);
      throw new Error("Missing required wishlist fields");
    }

    // add the wishlist
    const data = await wishlistQuery.addWishlist(wishlist);

    // return the added wishlist
    return res.status(201).json({
      message: `Wishlist of ${wishlist._customer} was added successfully`
    });
  } catch (err) {
    next(err);
  }
};

const deleteWishlist = async (req, res, next) => {
  try {
    // get the wishlist object from the request
    const wishlist = req.body;

    // ensure that the wishlist object is not null
    if (!wishlist) {
      res.status(400);
      throw new Error("Wishlist object is null");
    }

    // ensure the wishlist object is not empty
    if (Object.keys(wishlist).length === 0) {
      res.status(400);
      throw new Error("Wishlist object is empty");
    }

    // ensure the wishlist object doesn't have any invalid properties
    const validKeys = ["_customer", "_book"];
    const invalidKeys = Object.keys(wishlist).filter(
      (key) => !validKeys.includes(key)
    );
    if (invalidKeys.length > 0) {
      res.status(400);
      throw new Error(
        `Invalid wishlist fields provided for update: ${invalidKeys.join(", ")}`
      );
    }

    // ensure the wishlist object has all required properties
    if (!wishlist._customer || !wishlist._book) {
      res.status(400);
      throw new Error("Missing required wishlist fields");
    }

    // delete the wishlist
    const data = await wishlistQuery.deleteWishlist(
      wishlist._customer,
      wishlist._book
    );

    // ensure the wishlist was deleted
    if (data.rowCount === 0) {
      res.status(404);
      throw new Error("Data not found");
    }

    // return the deleted wishlist
    return res.status(200).json({
      message: `Wishlist with customer ${wishlist._customer} and book ${wishlist._book} was deleted successfully`
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllWishlists,
  getWishlistById,
  addWishlist,
  deleteWishlist
};
