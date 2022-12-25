import { v4 } from "uuid";
import Redis from "ioredis";

const redis = new Redis();

export const confirmationUrl = async (userId: number) => {
  const uniqueId = v4();
  const url = `http://localhost:3000/user/confirm/${uniqueId}`;
  redis.set(uniqueId, userId, "EX", 60 * 60 * 2);

  return url;
};
