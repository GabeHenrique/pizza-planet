import {prismaClient} from "../../prisma";

export type ProductRequest = {
  categoryId: string
}

export class ListByCategoryService {
  async execute({categoryId}: ProductRequest) {
    return prismaClient.product.findMany({
      where: {
        category_id: categoryId
      }
    })
  }
}