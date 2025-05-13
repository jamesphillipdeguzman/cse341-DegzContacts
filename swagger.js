import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "CSE341-DegzContacts",
      version: "1.0.0",
      description: "API documentation for my contacts project",
    },
    servers: [
      {
        url: "https://cse341-degzcontacts.onrender.com",
      },
      {
        url: "http:localhost:3000",
      },
    ],
  },
  apis: ["./routes/*.js"], // Path to the routes with JSDoc comments
};

const swaggerSpec = swaggerJsdoc(options);

export default function (app) {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}
