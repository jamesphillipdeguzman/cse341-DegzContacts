// Sets up Express, routes, and middlewares.
import express from "express";
import contactRoutes from "./routes/contacts.js";
import swaggerDocs from "./swagger.js";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

// Use CORS middleware
app.use(cors());

// Setup parser middleware
app.use(express.json());

// Create the swagger document
swaggerDocs(app);

// Mount routes at /api/contacts
app.use("/api/contacts", contactRoutes);

export { app, PORT };
