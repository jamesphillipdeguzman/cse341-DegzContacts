import express from "express";
import {
  getAllContacts,
  findContactById,
} from "../controllers/contactsController.js";

const router = express.Router();
// Define the routes for contacts
router.get("/", getAllContacts);
router.get("/:id", findContactById);

export default router;
