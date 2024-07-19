import {Request, Response} from "express";
import {CreateOrderService, OrderRequest} from "../../services/order/CreateOrderService";

export class CreateOrderController {
  async handle(req:Request, res: Response) {
    const {table, name} = req.body as OrderRequest;

    const createOrderService = new CreateOrderService();

    const order = await createOrderService.execute({name, table});

    return res.json(order);
  }
}