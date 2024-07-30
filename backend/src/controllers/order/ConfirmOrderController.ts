import {Request, Response} from "express";
import {ConfirmOrderRequest, ConfirmOrderService} from "../../services/order/ConfirmOrderService";

export class ConfirmOrderController {
  async handle(req: Request, res: Response) {
    const {orderId} = req.body as ConfirmOrderRequest;
    const confirmOrderService =new ConfirmOrderService();
    const order = await confirmOrderService.execute({orderId});

    return res.json(order);
  }
}