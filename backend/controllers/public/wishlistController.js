const wishlistQuery = require("../../database/public/wishlistQuery");

const getAllWishlists = async (req, res, next) => {
  try {
    let data;

    data = await wishlistQuery.getAllWishlists();

    if (data.rowCount === 0) {
      res.status(404);
      throw new Error("Entah mengapa, data tidak ditemukan");
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
      throw new Error("Entah mengapa, data tidak ditemukan");
    }

    return res.status(200).json({ data: data.rows });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllWishlists,
  getWishlistById
};
