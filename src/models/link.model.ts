import { model, Schema, Model, Document } from "mongoose";

interface ILink extends Document {
    source_url: string,
    destination_url: string
}


const LinkSchema: Schema = new Schema({
    source_url: { type: String, required: true },
    destination_url: { type: String, required: true }
});

export const Link: Model<ILink> = model("Link", LinkSchema);