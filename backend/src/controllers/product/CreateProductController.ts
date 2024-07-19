import {Request, Response} from "express";
import {CreateProductService, ProductRequest} from "../../services/product/CreateProductService";

export class CreateProductController {
  async handle(req: Request, res: Response) {
    let {price, categoryId, description, name} = req.body as ProductRequest;
    const createProductService = new CreateProductService();

    if (!req.file) {
      throw new Error("Image is missing");
    }

    const banner = req.file.filename;
    const productSave = await createProductService.execute({name, price, description, banner, categoryId});
    return res.json(productSave);
  }

}