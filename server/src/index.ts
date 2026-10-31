import app from "./app";
import { connectDb } from "./config/db";
import { env } from "./config/env";

async function start() {
  await connectDb();
  app.listen(env.PORT, () => {
    console.log(`API listening on http://localhost:${env.PORT}`);
  });
}

start().catch((err) => {
  console.error("Failed to start server", err);
  process.exit(1);
});
