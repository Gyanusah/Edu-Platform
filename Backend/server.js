import express from 'express';
import dotenv from 'dotenv';
import connectDB from './utils/db.js';
import router from './Router/userRouter.js';
import cookieParser from 'cookie-parser';
import cors from "cors";
import compression from 'compression';

dotenv.config();

const app = express();
// Enable gzip compression for responses
app.use(compression());
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

// Basic caching headers for static-like JSON responses
app.use((req, res, next) => {
    // Skip for non-GET requests
    if (req.method !== 'GET') return next();
    // Do not cache auth endpoints
    if (req.path.startsWith('/api/login') || req.path.startsWith('/api/logout')) return next();
    res.set('Cache-Control', 'public, max-age=60, s-maxage=60');
    next();
});

// Routes
app.use("/api", router);




const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});
