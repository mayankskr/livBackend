import mongoose from "mongoose";

const querySchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    number:{
        type:String,
        required:true
    },
    query:{
        type:String,
        required:true
    }
})

const Query = mongoose.model("Query", querySchema);
export default Query;