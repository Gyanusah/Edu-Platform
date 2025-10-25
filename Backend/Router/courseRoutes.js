import express from "express";
import { getAllCourses, getCourseById, postCourse } from "../controllers/courseController.js";


const router = express.Router();

router.post("/add", postCourse)
router.get("/course", getAllCourses);
router.get("/course:id", getCourseById);

export default router;
