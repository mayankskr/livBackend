import {
  getQueriesService,
  createQueryService,
  deleteQueryService,
} from "../services/query.service.js";
import { asyncWrap } from "../utils/errorHandler.js";

export const getQueriesController = asyncWrap(async (req, res) => {
  const data = await getQueriesService();
  res.status(200).json({ success: true, data });
});

export const createQueryController = asyncWrap(async (req, res) => {
  const data = await createQueryService(req.body);
  res.status(201).json({ success: true, data });
});

export const deleteQueryController = asyncWrap(async (req, res) => {
  const { id } = req.params;
  await deleteQueryService(id);
  res
    .status(200)
    .json({ success: true, message: "Query resolved and deleted" });
});
