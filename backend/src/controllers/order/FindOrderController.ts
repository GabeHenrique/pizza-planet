import { Request, Response} from "express";
import { FindOrderService} from "../../services/order/FindOrderService";

export class FindOrderController {
  async handle(req: Request, res: Response) {
    const orderId = req.params.orderId as string;
    const findOrderService = new FindOrderService();

    const order = await findOrderService.execute({orderId})
    return res.json(order)
  }
}