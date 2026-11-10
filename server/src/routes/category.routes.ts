import { Router } from "express";
import { listCategories } from "../controllers/category.controller";
import { requireAuth } from "../middleware/requireAuth";

const router = Router();

router.use(requireAuth);

router.get("/", listCategories);

export default router;
