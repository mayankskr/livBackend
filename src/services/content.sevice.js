import Content from "../models/siteContent.model.js";
import connectionDB from "../db/connectionDB.js";

await connectionDB()

// Send data
export const sendDataService = async()=>{
    const doc = await Content.find().lean();
    console.log(doc[0]); // doc -> document
    return doc[0];
}

// Update data
export const updateDataService = async(data,updateData)=>{

    // Syntax is=> model.findByIdAndUpdate(id, updateField, options)
    // We are using new and runValidator operations to return updated documents and run validator.
    return await Content.findOneAndUpdate(data,updateData,{ new: true, runValidators: true })
}