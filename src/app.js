// Import
import express from "express";
import cors from "cors";

// Create App object
const app = express();

// Middlewares
app.use(cors());
app.use(express.json({limit:"16kb"}));
app.use(express.urlencoded({extended:true, limit:"16kb"}));

//Export
export default app