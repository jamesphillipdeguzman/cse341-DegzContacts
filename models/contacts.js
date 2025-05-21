// const mongoose = require('mongoose');
// Defines the Mongoose schema for a contact.
import mongoose from "mongoose";
const contactSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  favoriteColor: { type: String, required: true },
  birthday: { type: String, required: true },
});

// Create a model using the schema
const Contact = mongoose.model("Contact", contactSchema);

// module.exports = Contact;
export default Contact;
