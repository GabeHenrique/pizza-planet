import {Request, Response} from 'express'
import {CreateUserRequestIn, CreateUserService} from "../../services/user/CreateUserService";
import {validationResult} from "express-validator";

export class CreateUserController {

  async handle(req: Request, res: Response) {
    const service = new CreateUserService();
    const {name, email, password}: CreateUserRequestIn = req.body
    const result = await service.execute({name, email, password})
    return res.json(result);
  }
}