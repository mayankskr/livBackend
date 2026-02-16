import { queryDataService } from "../services/query.service";
import { asyncWrap } from "../utils/errorHandler";
export const getQueryController = asyncWrap(async (req,res)=>{
    const data = await queryDataService;
    res.status(200).json({
        success:true,
        data
    })
})