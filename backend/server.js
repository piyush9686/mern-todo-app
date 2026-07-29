import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"

import userRouter from "./routes/userRoute.js"
import taskRouter from "./routes/taskRoute.js"
import forgotPasswordRouter from "./routes/forgotPassword.js"

//app config
dotenv.config()
const app = express()
const port = process.env.PORT || 8001
mongoose.set('strictQuery', true);

//middlewares
app.use(express.json())
app.use(cors())

//db config
// mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
// }, (err) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log("DB Connected")
//     }
// })

const connectDB = async () => {
    try {
        const mongoUri = process.env.MONGODB_URI || process.env.MONGO_URI;

        if (!mongoUri) {
            throw new Error('MongoDB URI is not defined. Set MONGODB_URI or MONGO_URI in the backend .env file.');
        }

        const conn = await mongoose.connect(mongoUri, {
            dbName: process.env.DB_NAME,
        });

        console.log(`mongoDB Connected:${conn.connection.host}`);
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
};

connectDB();
//api endpoints
app.use("/api/user", userRouter)
app.use("/api/task", taskRouter)
app.use("/api/forgotPassword", forgotPasswordRouter)

//listen
app.listen(port, () => console.log(`Listening on localhost:${port}`))