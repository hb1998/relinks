import { Link } from './../models/link.model';
import { Request, Response } from "express";

const handleUrl = async (req: Request, res: Response) => {
    try {
        const destinationUrl = req.originalUrl.split('/')[2];
        const link = await Link.findOne({ destinationUrl });
        if (link?.sourceUrl) {
            res.redirect(link.sourceUrl)
        }
    } catch (err) {
        res.status(500).send("Server Error")
    }
}


export const URLController = {
    handleUrl,
}