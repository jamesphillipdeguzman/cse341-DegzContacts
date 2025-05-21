import { body } from "express-validator";

export const validateContactUpdate = [
  body("firstName")
    .optional()
    .custom((value) => typeof value === "string")
    .withMessage("Firstname is optional and must be a string"),
  body("lastName")
    .optional()
    .custom((value) => typeof value === "string")
    .withMessage("Lastname is optional and must be a string"),
  body("email")
    .optional()
    .custom((value) => typeof value === "string")
    .withMessage("Email is optional and must be a string"),
  body("favoriteColor")
    .optional()
    .custom((value) => typeof value === "string")
    .withMessage("Favorite color is optional and must be a string"),
  body("birthday")
    .optional()
    .custom((value) => typeof value === "string")
    .withMessage("Birthday is optional and must be a string"),
];
