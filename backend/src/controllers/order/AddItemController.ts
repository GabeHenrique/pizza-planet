import {Request, Response} from "express";
import {AddItemService, ItemRequest} from "../../services/order/AddItemService";

export class AddItemController {
  async handle(req: Request, res: Response) {
    const {orderId, productId, amount} = req.body as ItemRequest;
    const addItemService = new AddItemService();

    const item = await addItemService.execute({amount, orderId, productId})
    return res.json(item)
  }
}