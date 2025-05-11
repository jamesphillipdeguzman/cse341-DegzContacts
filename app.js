// Sets up Express, routes, and middlewares.
import express from "express";
import contactRoutes from "./routes/contacts.js";

const app = express();
const PORT = process.env.PORT || 3000;
// app.set("port", PORT);

// Setup parser middleware
app.use(express.json());

// Mount routes at /api/contacts
app.use("/api/contacts", contactRoutes);

export { app, PORT };
