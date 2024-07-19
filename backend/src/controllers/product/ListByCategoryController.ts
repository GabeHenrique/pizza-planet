import {Request, Response} from "express";
import {ListByCategoryService, ProductRequest} from "../../services/product/ListByCategoryService";

export class ListByCategoryController {
  async handle(req: Request, res: Response) {
    const {categoryId} = req.query as ProductRequest;
    const listByCategoryService = new ListByCategoryService();
    const result = await listByCategoryService.execute({categoryId})
    return res.json(result);
  }
}