import {prismaClient} from "../../prisma";

export type DetailRequest = {
  orderId: string
}

export class FindOrderService {
  async execute({orderId}: DetailRequest) {
    return prismaClient.item.findMany({
      where: {
        order_id: orderId
      },
      include: {
        product: true,
        order: true
      }
    });
  }
}