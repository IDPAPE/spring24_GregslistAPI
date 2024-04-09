import mongoose from "mongoose";
const Schema = mongoose.Schema

export const HouseSchema = new Schema(
    {
        bedrooms: { type: Number, required: true, min: 0, max: 30 },
        bathrooms: { type: Number, required: true, min: 0, max: 25 },
        levels: { type: Number, required: true, min: 1, max: 4 },
        price: { type: Number, required: true, min: 0, max: 10000000 },
        imgUrl: { type: String, required: true, min: 0, max: 500 },
        description: { type: String, min: 0, max: 500 },
        year: { type: Number, required: true, min: 1000, max: 2024 },
        creatorId: { type: Schema.ObjectId, required: true, ref: 'Account' }
    },
    {
        timestamps: true,
        toJSON: {
            virtuals: true
        }
    }
);