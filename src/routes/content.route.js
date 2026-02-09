import express from "express";

import {
  getContentController,
  updateContentController
} from "../controllers/content.controller.js";

const router = express.Router();

/* ===============================
   Get Content
   GET /api/content
================================ */
router.get("/", getContentController);

/* ===============================
   Update Content
   PUT /api/content/:id
================================ */
router.put("/:id", updateContentController);

/* ===============================
   Partial Update (optional)
   PATCH /api/content/:id
================================ */
router.patch("/:id", updateContentController);

export default router;
