import { Hit } from './../models/hit.model';
import { nanoid } from 'nanoid'
import { Request } from "express";
import { Redis } from './redis';

export const getDestinationUrl = () => {
    return nanoid(8);
}

export const cacheLink = (sourceUrl: string, destinationUrl: string) => {
    Redis.set(destinationUrl, sourceUrl);
}

export const addHits = (req: Request) => {
    const originSite = req.get("origin");
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    // console.log(lookup(ip)); // location of the user
    const originIP = req.get("origin");

    // const hit = new Hit({

    // })
}

export const getMongoDbUrl = () => {
    if (process.env.NODE_ENV === "production") {
        return `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`
    } else {
        return `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`
    }
}
