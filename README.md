# Contacts Project API

A RESTful API for retrieving all contacts and finding contacts by ID. I have set up a `persons` database and a `contacts` collection in MongoDB. The connection string is configured to link VS Code to MongoDB, and environment variables are stored in a `.env` file, which is **not** pushed to GitHub to protect my MongoDB credentials.

This simple program is my assignment for CSE341 (Part 1) for Week 1 and will be further enhanced in Week 2 (final version).

## Features

- Retrieve all contacts
- Retrieve a contact by ID

## Technologies Used

- Node.js
- Express.js
- MongoDB (with Mongoose)
- REST Client (for testing)
- dotenv

## Getting Started

### Prerequisites

- Node.js installed
- MongoDB database and URI
- `.env` file with the following:
  MONGO_URI=your_mongodb_connection_string
