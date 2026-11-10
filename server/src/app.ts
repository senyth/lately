import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import { env } from "./config/env";
import { errorHandler } from "./middleware/errorHandler";
import authRouter from "./routes/auth.routes";
import categoryRouter from "./routes/category.routes";

const app = express();

app.set("trust proxy", 1);

app.use(cors({ origin: env.CLIENT_ORIGIN, credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.get("/api/health", (_req, res) => {
  const dbConnected = mongoose.connection.readyState === 1; // 1 = connected
  res.status(dbConnected ? 200 : 503).json({
    status: dbConnected ? "ok" : "degraded",
    db: dbConnected ? "connected" : "disconnected",
  });
});

app.use("/api/auth", authRouter);
app.use("/api/categories", categoryRouter);

app.use(errorHandler);

export default app;
