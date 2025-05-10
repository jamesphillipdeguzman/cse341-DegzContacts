// const mongoose = require('mongoose');
// Defines the Mongoose schema for a contact.
import mongoose from "mongoose";
const contactSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  favoriteColor: String,
  birthday: String,
});

// Create a model using the schema
const Contact = mongoose.model("Contact", contactSchema);

// module.exports = Contact;
export default Contact;
