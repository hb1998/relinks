import { RedisClient } from "redis";
import { promisify } from "util";
import redis from "redis";

const getRedisOptions = () => {
    if (process.env.NODE_ENV === "production") {
        return {
            url: process.env.REDIS_URL
        }
    } else {
        return {}
    }
}

const redisOptions = getRedisOptions();
const client: RedisClient = redis.createClient(redisOptions);
const get = promisify(client.get).bind(client);
const set = promisify(client.set).bind(client);

client.on("error", (error) => {
    console.error(error);

});

export const Redis = {
    set,
    get,
};

