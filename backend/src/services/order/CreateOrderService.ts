import {prismaClient} from "../../prisma";

export type OrderRequest = {
  table: number,
  name?: string
}

// TODO: Adicionar orderSlip, gerando automaticamente pra cada cliente uma que não estiver aberta
export class CreateOrderService {
  async execute({name, table}: OrderRequest) {
    // const verifyIfExists = prismaClient.order.findFirst({
    //   where: {
    //     table: table,
    //     status: "ACCEPTED" || "PENDING"
    //   }
    // })
    return prismaClient.order.create({
      data: {table, name}
    })
  }
}