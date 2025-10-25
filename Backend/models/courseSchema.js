;

import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema({
    title: { type: String, required: true },
    category: { type: String, required: true },
    level: { type: String, required: true },
    description: { type: String, required: true },
    instructor: { type: String, required: true },
    duration: { type: String, required: true },
    students: { type: Number, default: 0 },
    rating: { type: Number, default: 0 },
    price: { type: String, required: true },
    mode: { type: String, enum: ["Online", "Offline", "Hybrid"], required: true },
    image: { type: String, required: true },
}, { timestamps: true });

const Course = mongoose.model('Course', CourseSchema)
 export default Course;
