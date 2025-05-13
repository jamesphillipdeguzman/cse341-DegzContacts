// Defines the controller functions for handling contact-related requests.
import Contacts from "../models/Contacts.js";

// Get all contacts
export const getAllContacts = async (req, res) => {
  console.log("GET /api/contacts was called"); // Log when the route is accessed
  try {
    console.log("Fetching all contacts...");
    const contacts = await Contacts.find();
    res.status(200).json(contacts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occured", error: error.message });
  }
};

// Get a contact by ID
export const findContactById = async (req, res) => {
  try {
    console.log("Fetching contact by ID...");
    const { id } = req.params;
    const contact = await Contacts.findById(id);
    if (!contact) throw new Error("Contact not found!");
    res.status(200).json(contact);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "The contact was not found", error: error.message });
  }
};

// Create Contact
export const createContact = async (req, res) => {
  try {
    console.log("Creating a new contact!");
    const contact = new Contacts(req.body);
    const savedContact = await contact.save();

    res.status(201).json(savedContact);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating contact", error: error.message });
  }
};

// Update Contact
export const updateContact = async (req, res) => {
  try {
    console.log("Updating the contact...");
    const { id } = req.params;

    const updatedContact = await Contacts.findByIdAndUpdate(id, req.body, {
      new: true, // ensure the updated document is returned
      runValidators: true, // run model schema during the update
    });

    if (!updatedContact) {
      return res.status(404).json({ message: "Contact not found." });
    }

    res.status(200).json(updatedContact);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Could not update the document.",
        error: error.message,
      });
  }
};

// Delete Contact
export const deleteContact = async (req, res) => {
  try {
    console.log("Deleting the contact...");
    const { id } = req.params;

    const deletedContact = await Contacts.findByIdAndDelete(id);

    if (!deletedContact) {
      return res.status(404).json({ message: "Contact not found." });
    }

    res.status(200).json(deletedContact);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Could not delete the document.",
        error: error.message,
      });
  }
};
