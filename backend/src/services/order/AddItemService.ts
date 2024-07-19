import {prismaClient} from "../../prisma";

export type ItemRequest = {
  orderId: string,
  productId: string,
  amount: number
}

export class AddItemService {
  async execute({amount, orderId, productId}: ItemRequest) {
    return prismaClient.item.create({
      data: {
        order_id: orderId,
        product_id: productId,
        amount: amount
      }
    });
  }
}