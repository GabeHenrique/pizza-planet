import {prismaClient} from "../../prisma";

export type DeleteOrderRequest = {
  orderId: string
}

export class DeleteOrderService {
  async execute({orderId}: DeleteOrderRequest) {
    const order = await prismaClient.order.findFirst({
      where: {id: orderId}
    });

    if (!order) {
      throw new Error("Order doesn't exists")
    }
    if (!order.draft) {
      throw new Error("Order already sent to kitchen");
    }

    return prismaClient.order.delete({
      where: {id: orderId}
    })
  }
}