import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './products.model';
// import { taskStatusEnum } from './products.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProductsService {
  //  Init Mongoose Model
  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
  ) {}

  async insertProduct(title: string, description: string, status: string) {
    // Generate Random ID Here (Would use a Crypto and Hash Algorithm in real use)
    const generatedDate = new Date();

    // Process Status (Make sure that Status is Legal in Enum)
    // if (!Object.values(taskStatusEnum).includes(status as taskStatusEnum)) {
    //   // Validation for invalid status
    //   throw new TypeError(
    //     'Invalid task status. Status Must Be "TODO", ""COMPLETED" or "IN_PROGRESS"',
    //   );
    // }

    const newProduct = new this.productModel({
      // id: prodID,
      title: title,
      // status: status as taskStatusEnum,
      status: status,
      createdAt: generatedDate.toString(),
      updatedAt: generatedDate.toString(), // Updated Date Default to Generated Date
      description: description,
    });
    const result = await newProduct.save();

    return result.id as string;
  }

  async getProducts() {
    const products = await this.productModel.find().exec();

    return products.map((product: Product) => ({
      id: product.id,
      title: product.title,
      description: product.description,
      createdAt: product.createdAt,
      updatedAt: product.updatedAt,
    }));
  }

  async getSingleProduct(prodID: string) {
    const product = await this.findProduct(prodID);
    return {
      id: product.id,
      title: product.title,
      description: product.description,
      createdAt: product.createdAt,
      updatedAt: product.updatedAt,
    };
  }

  async deleteProduct(prodID: string) {
    const result = await this.productModel.deleteOne({ _id: prodID }).exec();

    if (result.deletedCount === 0) {
      throw new NotFoundException(
        "Couln't find or delete product with ID: " + prodID,
      );
    }
  }

  private findProduct(prodID: string): Promise<Product> {
    let product;

    try {
      product = this.productModel.findById(prodID).exec();
    } catch (error) {
      throw new NotFoundException("Couln't find product with ID: " + prodID);
    }

    if (!product) {
      throw new NotFoundException("Couln't find product with ID: " + prodID);
    }

    return product;
  }
}
