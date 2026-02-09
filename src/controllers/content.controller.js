import {
  sendDataService,
  updateDataService
} from "../services/content.service.js";

import { asyncWrap } from "../utils/errorHandler.js";

// Get Content
export const getContentController = asyncWrap(async (req, res) => {
  const data = await sendDataService();
  res.status(200).json({
    success: true,
    data
  });
});

// Update content
export const updateContentController = asyncWrap(async (req, res) => {
  const { data, updateData } = req.body;

  const updatedDoc = await updateDataService(data, updateData);

  if (!updatedDoc) {
    return res.status(404).json({
      success: false,
      message: "Content not found"
    });
  }

  res.status(200).json({
    success: true,
    data: updatedDoc
  });
});
