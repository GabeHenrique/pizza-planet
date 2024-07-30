import {prismaClient} from "../../prisma";

export class ListOrdersService {
async execute() {
  return prismaClient.order.findMany({
    where: {
      draft: false,
      status: false
    },
    orderBy: {
      created_at: 'desc'
    }
  })
}
}