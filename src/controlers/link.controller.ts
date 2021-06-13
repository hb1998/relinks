import { Request, Response } from "express";
import { cacheLink, getDestinationUrl } from "../utils/URLUtils";
import { Link } from './../models/link.model';
import validUrl from 'valid-url';

const createLink = async (req: Request, res: Response) => {
    const { sourceUrl } = req.body;
    if (!validUrl.isUri(sourceUrl)) {
        return res.status(400).send("Invalid URL")
    }
    const destinationUrl = getDestinationUrl();
    const link = new Link({
        sourceUrl,
        destinationUrl
    })
    await link.save();
    cacheLink(sourceUrl,destinationUrl);
    return res.status(200).send(link)
}


const updateLink = (req: Request, res: Response) => {

}

const deleteLink = (req: Request, res: Response) => {

}



export const LinkControllers = {
    createLink,
    updateLink,
    deleteLink
}