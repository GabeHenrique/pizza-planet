import {prismaClient} from "../../prisma";

export type ConfirmOrderRequest = {
  orderId: string
}

export class ConfirmOrderService {
  async execute({orderId}: ConfirmOrderRequest) {
    return prismaClient.order.update({
      where: {
        id: orderId
      },
      data: {
        draft: false
      }
    });
  }
}