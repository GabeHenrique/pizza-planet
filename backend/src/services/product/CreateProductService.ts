import {prismaClient} from "../../prisma";

export type ProductRequest = {
  name: string,
  price: number,
  description: string,
  banner: string,
  categoryId: string;
}

export class CreateProductService {
  async execute({name, price, description, banner, categoryId}: ProductRequest) {
    return prismaClient.product.create({
      data: {
        name: name,
        price: Number(price),
        description: description,
        banner: banner,
        category_id: categoryId
      },
    });
  }
}