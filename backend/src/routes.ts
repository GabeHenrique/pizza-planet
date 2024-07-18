import {Router} from "express";
import {CreateUserController} from "./controllers/user/CreateUserController";
import {isValidUser} from "../middleware/IsValidUser";
import {AuthUserController} from "./controllers/user/AuthUserController";
import {DetailUserController} from "./controllers/user/DetailUserController";
import {isAuthenticated} from "../middleware/IsAuthenticated";

export const router = Router();

// Rotas User
router.post('/user', isValidUser, new CreateUserController().handle);
router.post('/session', isValidUser, new AuthUserController().handle);
router.get('/user-info', isAuthenticated, new DetailUserController().handle);

// Rotas Categoria