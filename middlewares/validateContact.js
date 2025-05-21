import { body } from "express-validator";

export const validateContact = [
  body("firstName").notEmpty().withMessage("Firstname is required"),
  body("lastName").notEmpty().withMessage("Lastname is required"),
  body("email").notEmpty().withMessage("Email is required"),
  body("favoriteColor").notEmpty().withMessage("Favorite color is required"),
  body("birthday").notEmpty().withMessage("Birthday is required"),
];
