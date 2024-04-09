import mongoose from "mongoose";
const Schema = mongoose.Schema

export const JobSchema = new Schema(
    {
        company: { type: String, min: 0, max: 100 },
        jobTitle: { type: String, min: 0, max: 100 },
        hours: { type: Number, min: 1, max: 168 },
        rate: { type: Number, min: 1, max: 10000000 },
        imgUrl: { type: String, min: 0, max: 500 },
        description: { type: String, min: 0, max: 500 },
        creatorId: { type: Schema.ObjectId, ref: 'Account' }

    },
    {
        timestamps: true,
        toJSON: {
            virtuals: true
        }
    }
);