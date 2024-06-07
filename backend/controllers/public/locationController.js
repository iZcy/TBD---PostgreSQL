const locationQuery = require("../../database/public/locationQuery");

const getAllLocations = async (req, res, next) => {
  try {
    const data = await locationQuery.getAllLocations();
    if (data.rowCount === 0) {
      res.status(404);
      throw new Error("Data not found");
    }
    return res.status(200).json({
      data: data.rows
    });
  } catch (err) {
    next(err);
  }
};

const getLocationById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = await locationQuery.getLocationById(id);
    if (data.rowCount === 0) {
      res.status(404);
      throw new Error("Data not found");
    }
    return res.status(200).json({
      data: data.rows
    });
  } catch (err) {
    next(err);
  }
};

const updateLocation = async (req, res, next) => {
  try {
    // get the location id and location object from the request
    const id = req.params.id;
    const location = req.body;

    // ensure the location object is not empty
    if (Object.keys(location).length === 0) {
      res.status(400);
      throw new Error("Location object is empty");
    }

    // ensure that the location object doesn't have any invalid properties
    const validKeys = ["country", "state", "city", "street"];
    const invalidKeys = Object.keys(location).filter(
      (key) => !validKeys.includes(key)
    );
    if (invalidKeys.length > 0) {
      res.status(400);
      throw new Error(
        `Invalid location fields provided for update: ${invalidKeys.join(", ")}`
      );
    }

    // ensure the location object has at least one valid property
    if (
      location.country === undefined &&
      location.state === undefined &&
      location.city === undefined &&
      location.street === undefined
    ) {
      res.status(400);
      throw new Error("No valid location fields provided for update.");
    }

    // update the location
    const data = await locationQuery.updateLocation(id, location);

    // ensure the location was updated
    if (data.rowCount === 0) {
      res.status(404);
      throw new Error("Data not found");
    }

    // return the updated location
    return res.status(200).json({
      message: `Location with id ${id} was updated successfully`
    });
  } catch (err) {
    next(err);
  }
};

const addLocation = async (req, res, next) => {
  try {
    // get the location object from the request
    const location = req.body;

    // ensure that the location object is not null
    if (!location) {
      res.status(400);
      throw new Error("Location object is null");
    }

    // ensure the location object is not empty
    if (Object.keys(location).length === 0) {
      res.status(400);
      throw new Error("Location object is empty");
    }

    // ensure the location object doesn't have any invalid properties
    const validKeys = ["country", "state", "city", "street"];
    const invalidKeys = Object.keys(location).filter(
      (key) => !validKeys.includes(key)
    );
    if (invalidKeys.length > 0) {
      console.log(invalidKeys);
      res.status(400);
      throw new Error(
        `Invalid location fields provided for update: ${invalidKeys.join(", ")}`
      );
    }

    // ensure the location object has all required properties
    if (
      !location.country ||
      !location.state ||
      !location.city ||
      !location.street
    ) {
      res.status(400);
      throw new Error("Missing required location fields");
    }

    // add the location
    const data = await locationQuery.addLocation(location);

    // return the added location
    return res.status(201).json({
      message: `Location of ${location.street} was added successfully`
    });
  } catch (err) {
    next(err);
  }
};

const deleteLocation = async (req, res, next) => {
  try {
    // get the location id from the request
    const id = req.params.id;

    // ensure the location id is not null
    if (!id) {
      res.status(400);
      throw new Error("Location id is null");
    }

    // ensure the data exists
    const locationData = await locationQuery.getLocationById(id);
    if (locationData.rowCount === 0) {
      res.status(404);
      throw new Error("Data not found");
    }

    // delete the location
    const data = await locationQuery.deleteLocation(id);

    // ensure the location was deleted
    if (data.rowCount === 0) {
      res.status(404);
      throw new Error("Data not found");
    }

    // return the deleted location
    return res.status(200).json({
      message: `Location with id ${id} was deleted successfully`
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllLocations,
  getLocationById,
  updateLocation,
  addLocation,
  deleteLocation
};
