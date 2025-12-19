import Redis from "ioredis";
import { logger } from "./logger";

const redisUrl = process.env.REDIS_URL || "redis://localhost:6379";

// Reuse a single Redis connection across hot reloads in development
const redis =
  globalThis.redisClient ||
  new Redis(redisUrl, {
    maxRetriesPerRequest: 2,
    enableReadyCheck: true,
  });

if (!globalThis.redisClient) {
  globalThis.redisClient = redis;

  redis.on("ready", () => logger.info("Redis cache ready", { redisUrl }));
  redis.on("error", (error) =>
    logger.error("Redis cache error", { error: error?.message })
  );
  redis.on("reconnecting", () =>
    logger.warn("Redis cache reconnecting", { redisUrl })
  );
}

export { redis };
export default redis;
