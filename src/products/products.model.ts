// export class Product {
//   constructor(
//     public id: string,
//     public title: string,
//     public status: taskStatusEnum,
//     public createdAt: string,
//     public updatedAt: string,
//     public description?: string,
//   ) {}
// }

import * as mongoose from 'mongoose';

// export enum taskStatusEnum {
//   TODO = 'TODO',
//   IN_PROGRESS = 'IN_PROGRESS',
//   COMPLETED = 'COMPLETED',
// }

export const ProductSchema = new mongoose.Schema({
  title: { type: String, required: true },
  status: { type: String, required: true },
  description: { type: String, required: false },
  createdAt: { type: String, required: true },
  updatedAt: { type: String, required: true },
});

export interface Product extends mongoose.Document {
  id: string;
  title: string;
  status: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}
