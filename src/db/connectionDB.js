import { db_name } from "../constant.js";
import mongoose from "mongoose";

const connectionDB = async () =>{
    try {
        await mongoose.connect(`${process.env.MONGO_URI}${db_name}`)
        console.log("Successfully Connected to MongoDB");        
    } catch (error) {
        console.log("Failed to connect to DB:",error);
    }
}

export default connectionDB;