import { Schema } from "mongoose";

export const ProductSchema = new Schema({
    id: String,
    brand: String,
    description: String,
    image: String,
    price: Number,
});

