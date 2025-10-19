import mongoose from "mongoose"

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        // console.log(`mongoDB is connected :${conn.connection.host}`)
        console.log("mongodb is connected")
    } catch (error) {
        console.log("MongoDb connection failed", error.message)
        process.exit(1)
    }
}
export default connectDB;