import {Request, Response} from 'express'
import {CreateUserRequest, CreateUserService} from "../../services/user/CreateUserService";

export class CreateUserController {

  async handle(req: Request, res: Response) {
    const service = new CreateUserService();
    const result = await service.execute(req.body as CreateUserRequest)
    return res.json(result);
  }

}