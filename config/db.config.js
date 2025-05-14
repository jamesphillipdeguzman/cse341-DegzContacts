import { MongoClient, ObjectId } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGO_URI;

// GET

const showAllContacts = async (dbPersons) => {
  try {
    console.log("Returning all contacts...");
    // cursor is an iterable object in MongoDB which returns the result set
    const cursor = dbPersons.collection("contacts").find();
    // toArray() converts the result into array for smaller datasets. For larger datasets, use forEach on cursor instead.
    const contacts = await cursor.toArray();
    console.log(`${contacts.length} contacts found.`);
    console.log(contacts);
  } catch (error) {
    console.log("An error occured while returning all contacts", error.stack);
  }
};

const showContact = async (dbPersons, contactId) => {
  try {
    console.log("Returning one contact...");
    // Using createFromTime instead of the ObjectId constructor for g a more recent version of the MongoDB Node.js driver (v5+)
    // const objectId = new ObjectId.createFromTime(Date.parse(contactId) / 1000);
    const objectId = new ObjectId(contactId);
    const contact = await dbPersons
      .collection("contacts")
      .findOne({ _id: objectId });
    if (contact) {
      console.log(`Contact with id '${contactId}' was found.`);
      console.log(contact);
    } else {
      console.log(`No contact with id '${contactId}' was found`);
    }
  } catch (error) {
    console.error("An error occured while returning a contact", error.stack);
  }
};

// POST - Create a contact

const createContact = async (dbPersons) => {
  try {
    console.log("Creating a contact");

    const newContact = {
      firstName: "ewan",
      lastName: "ewan",
      email: "ewan",
      favoriteColor: "ewan",
      birthday: "ewan",
    };

    const result = await dbPersons.collection("contacts").insertOne(newContact);
    if (result.insertedId) {
      console.log(`Contact created with id ${result.insertedId}`);
      console.log(newContact);
    } else {
      console.log("Contact creation failed");
    }
  } catch (error) {
    console.error("An error occured", error.stack);
  }
};

// PUT - Update a contact

const updateContact = async (dbPersons, contactId) => {
  try {
    console.log("Updating a contact");

    const objectId = new ObjectId(contactId);

    const updateFields = {
      firstName: "Joy Miren",
      lastName: "Manzon",
      email: "joymirenmanzon@gmail.com",
      favoriteColor: "white",
      birthday: "12/12/2000",
    };

    const result = await dbPersons.collection("contacts").updateOne(
      { _id: objectId }, // Filter
      { $set: updateFields } // Update operation
    );

    if (result.modifiedCount === 1) {
      console.log(`Contact with id '${contactId}' was successfully updated.`);
      console.log(result);
    } else {
      console.log(`No contact found with id '${contactId}' to update.`);
    }
  } catch (error) {
    console.error("An error occured while updating the contact.", error.stack);
  }
};

// DELETE

const deleteContact = async (dbPersons, contactId) => {
  try {
    console.log("Deleting contact...");
    // Using createFromTime instead of the ObjectId constructor for g a more recent version of the MongoDB Node.js driver (v5+)
    // const objectId = new ObjectId.createFromTime(Date.parse(contactId) / 1000);
    const objectId = new ObjectId(contactId);
    const result = await dbPersons
      .collection("contacts")
      .deleteOne({ _id: objectId });
    if (result.deletedCount === 1) {
      console.log(`Contact with id '${contactId}' was deleted.`);
      console.log(result);
    } else {
      console.log(`No contact to delete`);
    }
  } catch (error) {
    console.error("An error occured while deleting contact", error.stack);
  }
};

const main = async () => {
  if (!uri) {
    console.error("MONGO_URI is not defined in your .env file");
    process.exit(1); // Exit application if URI not found
  }
  const client = new MongoClient(uri);
  try {
    console.log("Connecting to database...");

    await client.connect();
    const dbPersons = client.db("persons");

    // Uncomment the CRUD operation you want to use...
    // await showAllContacts(dbPersons); // READ all
    // await showContact(dbPersons, "6823672deefc85dd1d95fcdf"); // READ one
    // await createContact(dbPersons); // CREATE one
    await updateContact(dbPersons, "68246e673a5e34f730af0fe8"); // UPDATE one
    // await deleteContact(dbPersons, "68246bee6972ccf4075aacd3"); // DELETE one

    // Find a contact by Id
  } catch (error) {
    console.error(`An error occured`, error.stack);
  } finally {
    await client.close();
  }
};

main();
