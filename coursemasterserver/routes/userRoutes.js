import express from "express";
import { login, register, logout } from "../controllers/userController.js";

const router = express.Router();


// To Register a new user
router.route('/register').post(register);

// To Login a user
router.route('/login').post(login);

// To Login a user
router.route('/logout').post(logout);

export default router;