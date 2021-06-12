import { model, Schema, Document } from "mongoose";

export interface ILink {
    sourceUrl: string,
    destinationUrl: string
}
interface ILinkModel extends Document, ILink { }


const LinkSchema: Schema = new Schema({
    sourceUrl: { type: String, required: true },
    destinationUrl: { type: String, required: true }
});

export const Link = model<ILinkModel>("Link", LinkSchema);