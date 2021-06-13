import { model, Schema, Document } from "mongoose";

/**
 * URL Hits
 */
export interface IHit {
    originSite: string,
    originIP: string,
}
interface IHitModel extends Document, IHit { }


const HitSchema: Schema = new Schema({
    originSite: String,
    originIP: String,
    link: {
        type: Schema.Types.ObjectId,
        ref: 'Link'
    }
}, { timestamps: true });

export const Hit = model<IHitModel>("Hit", HitSchema);