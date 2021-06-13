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