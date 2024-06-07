const contactQuery = require("../../database/public/contactQuery");

const getAllContacts = async (req, res, next) => {
  try {
    let data;

    data = await contactQuery.getAllContacts();

    if (data.rowCount === 0) {
      res.status(404);
      throw new Error("Data not found!");
    }

    return res.status(200).json({ data: data.rows });
  } catch (err) {
    next(err);
  }
};

const getContactById = async (req, res, next) => {
  try {
    const id = req.params.id;
    let data;

    data = await contactQuery.getContactById(id);

    if (data.rowCount === 0) {
      res.status(404);
      throw new Error("Data not found!");
    }

    return res.status(200).json({ data: data.rows });
  } catch (err) {
    next(err);
  }
};

const updateContact = async (req, res, next) => {
  try {
    // get the contact id and contact object from the request
    const id = req.params.id;
    const contact = req.body;

    // ensure the contact object exists
    if (!contact) {
      res.status(400);
      throw new Error("Contact object is null");
    }

    // ensure the contact object is not empty
    if (Object.keys(contact).length === 0) {
      res.status(400);
      throw new Error("Contact object is empty");
    }

    // ensure that the contact object doesn't have any invalid properties
    const validKeys = [
      "phone",
      "email",
      "website",
      "instagram",
      "whatsapp",
      "line"
    ];
    const invalidKeys = Object.keys(contact).filter(
      (key) => !validKeys.includes(key)
    );
    if (invalidKeys.length > 0) {
      res.status(400);
      throw new Error(
        `Invalid contact fields provided for update: ${invalidKeys.join(", ")}`
      );
    }

    // ensure the contact object has at least one valid property
    if (
      contact.phone === undefined &&
      contact.email === undefined &&
      contact.website === undefined &&
      contact.instagram === undefined &&
      contact.whatsapp === undefined &&
      contact.line === undefined
    ) {
      res.status(400);
      throw new Error("No valid contact fields provided for update.");
    }

    // update the contact
    const data = await contactQuery.updateContact(id, contact);

    // ensure the contact was updated
    if (data.rowCount === 0) {
      res.status(404);
      throw new Error("Data not found");
    }

    // return the updated contact
    return res.status(200).json({
      message: `Contact with id ${id} was updated successfully`
    });
  } catch (err) {
    next(err);
  }
};

const addContact = async (req, res, next) => {
  try {
    // get the contact object from the request
    const contact = req.body;

    // ensure that the contact object is not null
    if (!contact) {
      res.status(400);
      throw new Error("Contact object is null");
    }

    // ensure the contact object is not empty
    if (Object.keys(contact).length === 0) {
      res.status(400);
      throw new Error("Contact object is empty");
    }

    // ensure the contact object doesn't have any invalid properties
    const validKeys = [
      "phone",
      "email",
      "website",
      "instagram",
      "whatsapp",
      "line"
    ];
    const invalidKeys = Object.keys(contact).filter(
      (key) => !validKeys.includes(key)
    );
    if (invalidKeys.length > 0) {
      res.status(400);
      throw new Error(
        `Invalid contact fields provided for update: ${invalidKeys.join(", ")}`
      );
    }

    // ensure the contact object has all required properties
    if (
      !contact.phone ||
      !contact.email ||
      !contact.website ||
      !contact.instagram ||
      !contact.whatsapp ||
      !contact.line
    ) {
      res.status(400);
      throw new Error("Missing required contact fields");
    }

    // add the contact
    const data = await contactQuery.addContact(contact);

    // return the added contact
    return res.status(201).json({
      message: `Contact of ${contact.phone} was added successfully`
    });
  } catch (err) {
    next(err);
  }
};

const deleteContact = async (req, res, next) => {
  try {
    // get the contact id from the request
    const id = req.params.id;

    // ensure the contact id is not null
    if (!id) {
      res.status(400);
      throw new Error("Contact id is null");
    }

    // ensure the data exists
    const contactData = await contactQuery.getContactById(id);
    if (contactData.rowCount === 0) {
      res.status(404);
      throw new Error("Data not found");
    }

    // delete the contact
    const data = await contactQuery.deleteContact(id);

    // ensure the contact was deleted
    if (data.rowCount === 0) {
      res.status(404);
      throw new Error("Data not found");
    }

    // return the deleted contact
    return res.status(200).json({
      message: `Contact with id ${id} was deleted successfully`
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllContacts,
  getContactById,
  updateContact,
  addContact,
  deleteContact
};
