import {Request, Response} from "express";
import {DeleteItemRequest, DeleteItemService} from "../../services/order/DeleteItemService";


export class DeleteItemController {
  async handle(req: Request, res: Response) {
    const {itemId} = req.query as DeleteItemRequest;
    const deleteItemService = new DeleteItemService();

    const order = await deleteItemService.execute({itemId})
    return res.json(order);
  }
}