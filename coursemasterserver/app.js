import express from "express";
import { config } from "dotenv";
import ErrorMiddleware from "./middlewares/Error.js";

config({
  path: "./config/config.env",
});

const app = express();

// using middlewares
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Importing and using routes
import course from "./routes/courseRoutes.js";
import user from "./routes/userRoutes.js";

app.use("/app/v1", course);
app.use("/app/v1", user);

app.use(ErrorMiddleware);

export default app;
