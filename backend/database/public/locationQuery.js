const tables = require("../../config/tables");
const db = require("../../config/connectDb");

// INSERT INTO public."LOCATION" (country, state, city, street)
// VALUES
// ('Indonesia', 'Yogyakarta', 'Yogyakarta', 'Jalan Malioboro No. 123'),

const getAllLocations = async () =>
  new Promise((resolve, reject) => {
    db.query(`SELECT * FROM ${tables.location.table}`, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });

const getLocationById = async (id) =>
  new Promise((resolve, reject) => {
    db.query(
      // custom limit
      `SELECT * FROM ${tables.location.table} WHERE ${tables.location.primary} = $1 LIMIT 1`,
      [id],
      (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      }
    );
  });

const addLocation = async (location) =>
  new Promise((resolve, reject) => {
    db.query(
      `INSERT INTO ${tables.location.table} (country, state, city, street) VALUES ($1, $2, $3, $4)`,
      [location.country, location.state, location.city, location.street],
      (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      }
    );
  });

const updateLocation = async (id, location) => {
  return new Promise((resolve, reject) => {
    const updates = [];
    const values = [];

    if (location.country !== undefined) {
      updates.push("country = $" + (updates.length + 1));
      values.push(location.country);
    }
    if (location.state !== undefined) {
      updates.push("state = $" + (updates.length + 1));
      values.push(location.state);
    }
    if (location.city !== undefined) {
      updates.push("city = $" + (updates.length + 1));
      values.push(location.city);
    }
    if (location.street !== undefined) {
      updates.push("street = $" + (updates.length + 1));
      values.push(location.street);
    }

    if (updates.length === 0) {
      return reject(new Error("No location fields provided for update."));
    }

    values.push(id);

    const query = `UPDATE ${tables.location.table} SET ${updates.join(", ")} WHERE ${tables.location.primary} = $${values.length}`;

    db.query(query, values, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

const deleteLocation = async (id) =>
  new Promise((resolve, reject) => {
    db.query(
      `DELETE FROM ${tables.location.table} WHERE ${tables.location.primary} = $1`,
      [id],
      (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      }
    );
  });

module.exports = {
  getAllLocations,
  getLocationById,
  addLocation,
  updateLocation,
  deleteLocation
};
