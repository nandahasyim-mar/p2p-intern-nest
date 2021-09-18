import { Document } from 'mongoose';
export class Amount extends Document {
    readonly topUp: Number;
    // readonly timestamp: Date;
}