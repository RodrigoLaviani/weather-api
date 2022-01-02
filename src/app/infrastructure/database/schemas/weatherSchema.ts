import { Schema } from "mongoose"

export const weatherSchema = new Schema({
    id: Schema.Types.ObjectId,
    from: Date,
    to: Date,
    location: String,
    rain: Number,
    temp: Number
})