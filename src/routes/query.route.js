import express from "express";
import {
  getQueriesController,
  createQueryController,
  deleteQueryController,
} from "../controllers/query.controller.js";

const router = express.Router();

router.route("/").get(getQueriesController).post(createQueryController);

router.route("/:id").delete(deleteQueryController);

export default router;
