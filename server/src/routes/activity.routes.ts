import { Router } from "express";
import {
  createActivity,
  listActivities,
} from "../controllers/activity.controller";
import { requireAuth } from "../middleware/requireAuth";

const router = Router();

router.use(requireAuth);

router.post("/", createActivity);
router.get("/", listActivities);

export default router;
