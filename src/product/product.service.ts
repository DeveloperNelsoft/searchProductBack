import { Injectable } from '@nestjs/common';

import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";

import { Product } from "./interfaces/product.interface";
import { CreateProductDTO } from "./dto/product.dto";

@Injectable()
export class ProductService {

    constructor(@InjectModel('Product') private readonly productModel: Model<Product>) {}

    // Get all products
    async getProducts(): Promise<Product[]> {
        const products = await this.productModel.find();
        return products;
    }
    
    // Get a single Product
    async getProduct(id: number): Promise<Product[]> {
        // const product = await this.productModel.findById(id);
        const product = await this.productModel.find({"id": id});

        return product;
    }

    // Post a single product
    async createProduct(createProductDTO: CreateProductDTO): Promise<Product> {
        const newProduct = new this.productModel(createProductDTO);
        return newProduct.save();
    }

    // Delete Product
    // async deleteProduct(_id: number): Promise<any> {
    //     const deletedProduct = await this.productModel.findOneAndDelete(_id);
    //     return deletedProduct;
    // }

    // // Put a single product
    // async updateProduct(id: string, createProductDTO: CreateProductDTO): Promise<Product> {
    //     const updatedProduct = await this.productModel
    //                         .findByIdAndUpdate(id, createProductDTO, {new: true});
    //     return updatedProduct;
    // }

}
