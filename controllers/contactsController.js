// Defines the controller functions for handling contact-related requests.
import express from "express";
import Contacts from "../models/contacts.js";

// Get all contacts
export const getAllContacts = async (req, res) => {
  try {
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
