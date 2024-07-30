import {prismaClient} from "../../prisma";

export type DeleteItemRequest = {
  itemId: string
}

export class DeleteItemService {
  async execute({itemId}: DeleteItemRequest) {
    const orderItem = await prismaClient.item.findFirst({
      where: {id: itemId}
    });

    if (!orderItem) {
      throw new Error("Order or item doesn't exists")
    }

    return prismaClient.order.delete({
      where: {id: itemId}
    })
  }
}