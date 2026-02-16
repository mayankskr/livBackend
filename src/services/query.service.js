import Query from "../models/query.model";

export const queryDataService = async()=>{
    const doc = await Query.find.lean();
    return doc[0]
}