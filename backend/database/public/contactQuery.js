const tables = require("../../config/tables");
const db = require("../../config/connectDb");

const getAllContacts = async () =>
  new Promise((resolve, reject) => {
    db.query(`SELECT * FROM ${tables.contact.table}`, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });

const getContactById = async (id) =>
  new Promise((resolve, reject) => {
    db.query(
      // custom limit
      `SELECT * FROM ${tables.contact.table} WHERE ${tables.contact.primary} = $1 LIMIT 1`,
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

const updateContact = async (id, contact) =>
  new Promise((resolve, reject) => {
    const updates = [];
    const values = [];

    if (contact.phone !== undefined) {
      updates.push("phone = $" + (updates.length + 1));
      values.push(contact.phone);
    }

    if (contact.email !== undefined) {
      updates.push("email = $" + (updates.length + 1));
      values.push(contact.email);
    }

    if (contact.website !== undefined) {
      updates.push("website = $" + (updates.length + 1));
      values.push(contact.website);
    }

    if (contact.instagram !== undefined) {
      updates.push("instagram = $" + (updates.length + 1));
      values.push(contact.instagram);
    }

    if (contact.whatsapp !== undefined) {
      updates.push("whatsapp = $" + (updates.length + 1));
      values.push(contact.whatsapp);
    }

    if (contact.line !== undefined) {
      updates.push("line = $" + (updates.length + 1));
      values.push(contact.line);
    }

    if (updates.length === 0) {
      return reject(new Error("No contact fields provided for update."));
    }

    values.push(id);

    const query = `UPDATE ${tables.contact.table} SET ${updates.join(", ")} WHERE ${tables.contact.primary} = $${values.length}`;

    db.query(query, values, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });

const addContact = async (contact) =>
  new Promise((resolve, reject) => {
    db.query(
      `INSERT INTO ${tables.contact.table} (phone, email, website, instagram, whatsapp, line) VALUES ($1, $2, $3, $4, $5, $6)`,
      [
        contact.phone,
        contact.email,
        contact.website,
        contact.instagram,
        contact.whatsapp,
        contact.line
      ],
      (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      }
    );
  });

const deleteContact = async (id) =>
  new Promise((resolve, reject) => {
    db.query(
      `DELETE FROM ${tables.contact.table} WHERE ${tables.contact.primary} = $1`,
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
  getAllContacts,
  getContactById,
  updateContact,
  addContact,
  deleteContact
};
