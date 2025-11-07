import express from "express";
import {
    getAllCourses,
    getCourseById,
    createCourse,
    deleteCourse
} from "../controllers/courseController.js";

const router = express.Router();

router.post("/courses", createCourse);        // ✅ POST /api/courses
router.get("/courses", getAllCourses);        // ✅ GET /api/courses
router.get("/courses/:id", getCourseById);    // ✅ GET /api/courses/:id
router.delete("/courses/:id", deleteCourse);  // ✅ DELETE /api/courses/:id

export default router;
