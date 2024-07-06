import express from "express";
import { getAllCourses, createCourse } from "../controllers/courseController.js";

const router = express.Router();


//Get all courses without lectures
router.route("/courses").get(getAllCourses);

// Create new course - Only Admin
router.route("/createcourse").post(createCourse);

// Add Lectures, Delete Course, Get Course Details

// Delete Lectures

export default router;