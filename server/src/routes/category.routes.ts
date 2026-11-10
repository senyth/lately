import { Router } from "express";
import {
  createCategory,
  listCategories,
} from "../controllers/category.controller";
import { requireAuth } from "../middleware/requireAuth";

const router = Router();

router.use(requireAuth);

router.get("/", listCategories);
router.post("/", createCategory);

export default router;
