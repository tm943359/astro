import express from "express"
import serverless from "serverless-http"
import dotenv from "dotenv"
import connectDB from "../config/db/mongo.db.js"

dotenv.config()
connectDB() // Called once on initial function execution

const app = express()
app.use(express.json())

// Import & Mount Routes
import authRoutes from "../modules/auth/routes/authRoutes.js"
import bookingRoutes from "../modules/booking/routes/bookingRoutes.js"
import chatRoutes from "../modules/chat/routes/chatRoutes.js"
import paymentRoutes from "../modules/payment/routes/paymentRoutes.js"  
import dashboardRoutes from "../modules/dashboard/routes/dashboardRoutes.js"
import userManagementRoutes from "../modules/user-management/routes/userManagementRoutes.js"

app.use("/api/auth", authRoutes)
app.use("/api/booking", bookingRoutes)
app.use("/api/chat", chatRoutes)
app.use("/api/payment", paymentRoutes)
app.use("/api/dashboard", dashboardRoutes)
app.use("/api/admin/users", userManagementRoutes)

// Global Error Handler
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).json({ error: err.message })
})

// Export serverless function
export default serverless(app);

