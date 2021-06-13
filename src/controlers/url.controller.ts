import { Link } from './../models/link.model';
import { Request, Response } from "express";
import { Redis } from '../utils/redis';
import { addHits } from '../utils/URLUtils';

const handleUrl = async (req: Request, res: Response) => {
    try {
        console.log(req)
        const destinationUrl = req.originalUrl.split('/')[2];
        const sourceUrl = await getSourceUrl(destinationUrl);
        if (sourceUrl) {
            addHits(req);
            res.redirect(sourceUrl);
        } else {
            res.status(500).send("Server Error")
        }
    } catch (err) {
        res.status(500).send("Server Error")
    }
}

const getSourceUrl = async (destinationUrl: string) => {
    const redisCache = await Redis.get(destinationUrl)
    if (redisCache) {
        return redisCache;
    } else {
        const link = await Link.findOne({ destinationUrl });
        return link?.sourceUrl
    }
}

export const URLController = {
    handleUrl,
}