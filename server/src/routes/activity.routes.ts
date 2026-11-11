import { Router } from "express";
import { createActivity } from "../controllers/activity.controller";
import { requireAuth } from "../middleware/requireAuth";

const router = Router();

router.use(requireAuth);

router.post("/", createActivity);

export default router;
