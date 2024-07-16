import {Router, Request, Response} from "express";
import {ResourceNotFoundError} from "../handlers/errors/ResourceNotFoundError";
import {CreateUserController} from "./controllers/user/CreateUserController";

export const router = Router();

// Rotas User
router.post('/users', new CreateUserController().handle)