import {Request, Response} from "express";
import {DeleteOrderRequest, DeleteOrderService} from "../../services/order/DeleteOrderService";


export class DeleteOrderController {
  async handle(req: Request, res: Response) {
    const {orderId} = req.query as DeleteOrderRequest;
    const deleteOrderService = new DeleteOrderService();

    const order = await deleteOrderService.execute({orderId})
    return res.json(order);
  }
}