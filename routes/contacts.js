import express from "express";
import { param } from "express-validator";
import {
  getAllContacts,
  findContactById,
  createContact,
  updateContact,
  deleteContact,
} from "../controllers/contactsController.js";

import { validate } from "../middlewares/validate.js";
import { validateContact } from "../middlewares/validateContact.js";
import { validateContactUpdate } from "../middlewares/validateContactUpdate.js";

const router = express.Router();
// AI helped with debugging the indentation problems with this documentation
// GET all contacts
/**
 * @swagger
 * /api/contacts:
 *   get:
 *     summary: Get all contacts
 *     responses:
 *       200:
 *         description: A list of all contacts
 *       500:
 *         description: An error occurred while fetching the contacts
 */
router.get("/", getAllContacts);

// GET contact by ID
/**
 * @swagger
 * /api/contacts/{id}:
 *   get:
 *     summary: Get a contact by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The unique ID of the contact
 *     responses:
 *       200:
 *         description: The contact with the specified ID
 *       404:
 *         description: Contact not found
 *       500:
 *         description: An error occurred while fetching the contact
 */
router.get("/:id", findContactById);

// POST create contact
/**
 * @swagger
 * /api/contacts:
 *   post:
 *     summary: Create a new contact
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               email:
 *                 type: string
 *               favoriteColor:
 *                 type: string
 *               birthday:
 *                 type: string
 *     responses:
 *       201:
 *         description: Contact created successfully
 *       500:
 *         description: An error occurred while creating the contact
 */
router.post("/", validateContact, validate, createContact);

// PUT update contact
/**
 * @swagger
 * /api/contacts/{id}:
 *   put:
 *     summary: Update a contact by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The unique ID of the contact
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               email:
 *                 type: string
 *               favoriteColor:
 *                 type: string
 *               birthday:
 *                 type: string
 *     responses:
 *       200:
 *         description: Contact updated successfully
 *       404:
 *         description: Contact not found
 *       500:
 *         description: An error occurred while updating the contact
 */
router.put(
  "/:id",
  [
    param("id").isMongoId().withMessage("Invalid product ID"),
    ...validateContactUpdate,
    validate,
  ],
  updateContact
);

// DELETE contact
/**
 * @swagger
 * /api/contacts/{id}:
 *   delete:
 *     summary: Delete a contact by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The unique ID of the contact
 *     responses:
 *       200:
 *         description: Contact deleted successfully
 *       404:
 *         description: Contact not found
 *       500:
 *         description: An error occurred while deleting the contact
 */
router.delete("/:id", deleteContact);

export default router;
