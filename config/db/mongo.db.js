import mongoose from "mongoose"

const DB_NAME = "astrochats"
let isConnected = false // Track connection status

const connectDB = async () => {
    if (isConnected) {
        console.log("Using existing MongoDB connection")
        return
    }

    try {
        const conn = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        isConnected = conn.connections[0].readyState
        console.log("MongoDB connected successfully")
    } catch (error) {
        console.error("ERROR:", error)
        throw error 
    }
}

export default connectDB
