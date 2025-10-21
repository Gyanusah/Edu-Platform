import express from 'express';
import dotenv from 'dotenv';
import connectDB from './utils/db.js';
import router from './Router/userRouter.js';
import cookieParser from 'cookie-parser';
import cors from "cors";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));


// ✅ Allow requests from your React frontend
app.use(
    cors({
        origin: "http://localhost:5173", // frontend URL
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true, // optional: if you send cookies or tokens
    })
);

// Connect to MongoDB
connectDB();

// Routes
app.use("/api", router);

app.use('/', (req, res)=>{
res.send("hello world")
})





const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});
