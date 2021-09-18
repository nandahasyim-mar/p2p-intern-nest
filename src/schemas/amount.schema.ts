import * as mongoose from 'mongoose';
export const AmountSchema = new mongoose.Schema({
    topUp: { type: Number, index: true }
    // timestamp: { type: Number, default: Date.now },
}, {
    timestamps: { createdAt: 'created_on', updatedAt: 'updated_on' }
}
);