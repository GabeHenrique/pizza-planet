import {Request, Response} from "express";
import {CreateCategoryService} from "../../services/category/CreateCategoryService";

export class CreateCategoryController {
  async handle(req: Request, res: Response) {
    const createCategoryService = new CreateCategoryService();
    const result = createCategoryService.execute();

    return res.json(result);
  }
}