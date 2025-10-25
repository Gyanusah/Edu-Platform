import express from 'express';
import dotenv from 'dotenv';
import connectDB from './utils/db.js';
import router from './Router/userRouter.js';
import cookieParser from 'cookie-parser';
import courseRoutes from "./Router/courseRoutes.js";
import cors from "cors";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));


// ✅ Allow requests from your React frontend
app.use(
    cors()
);

// Connect to MongoDB
connectDB();

// Routes
app.use("/api", router);
app.use("/api/courses", courseRoutes);

app.use('/', (req, res)=>{
res.send("hello world")
})





const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});
