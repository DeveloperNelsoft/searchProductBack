import { Document } from "mongoose";

export interface Product extends Document {
    readonly id: number;
    readonly brand: string;
    readonly description: string;
    readonly image: string;
    readonly price: number;
}