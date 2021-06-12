import { Request, Response } from "express";
import { getDestinationUrl } from "../utils/URLUtils";
import { Link } from './../models/link.model';

const createLink = async (req: Request, res: Response) => {
    const { sourceUrl } = req.body;
    const destinationUrl = getDestinationUrl();
    const link = new Link({
        sourceUrl,
        destinationUrl
    })
    await link.save();
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