import { RedisClient } from "redis";
import { promisify } from "util";
import redis from "redis";
const client: RedisClient = redis.createClient();
const get = promisify(client.get).bind(client);
const set = promisify(client.set).bind(client);

client.on("error", (error) => {
    console.error(error);

});

export const Redis = {
    set,
    get,
};

