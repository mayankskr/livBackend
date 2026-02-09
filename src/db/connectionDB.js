// Import
import { db_name } from "../constant.js";
import mongoose from "mongoose";
import dotenv from "dotenv"

// Config dotenv
dotenv.config()

// Create connection Function
const connectionDB = async () =>{
    try {
        await mongoose.connect(`${process.env.MONGO_URI}${db_name}`)
        console.log("Successfully Connected to MongoDB");        
    } catch (error) {
        console.log("Failed to connect to DB:",error.message);
    }
}

export default connectionDB;