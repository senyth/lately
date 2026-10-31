import "dotenv/config";
import { z } from "zod";

const schema = z.object({
  PORT: z.coerce.number().default(5000),
  MONGODB_USERNAME: z.string().min(1),
  MONGODB_PASSWORD: z.string().min(1),
  MONGODB_HOST: z.string().min(1),
  MONGODB_DB: z.string().default("lately"),
  CLIENT_ORIGIN: z.string().min(1),
  JWT_SECRET: z.string().min(16),
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
});

const parsed = schema.parse(process.env);

export const env = {
  ...parsed,
  MONGODB_URI: `mongodb+srv://${encodeURIComponent(parsed.MONGODB_USERNAME)}:${encodeURIComponent(parsed.MONGODB_PASSWORD)}@${parsed.MONGODB_HOST}/${parsed.MONGODB_DB}?retryWrites=true&w=majority`,
};
