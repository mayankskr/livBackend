import Query from "../models/query.model.js";

export const getQueriesService = async () => {
  // Return all queries instead of just the first one
  return await Query.find().lean();
};

export const createQueryService = async (data) => {
  return await Query.create(data);
};

export const deleteQueryService = async (id) => {
  return await Query.findByIdAndDelete(id);
};
