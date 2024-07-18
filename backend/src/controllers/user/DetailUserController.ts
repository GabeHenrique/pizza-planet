import {Request, Response} from "express";
import {DetailUserService} from "../../services/user/DetailUserService";

export class DetailUserController {
  async handle(req: Request, res: Response) {
    const userId = req.user_id;

    const detailUserSevice = new DetailUserService();
    const user = await detailUserSevice.execute(userId);
    return res.json(user);
  }
}