import {Router} from "express";
import multer from "multer";
import {CreateUserController} from "./controllers/user/CreateUserController";
import {isValidUser} from "../middleware/IsValidUser";
import {AuthUserController} from "./controllers/user/AuthUserController";
import {DetailUserController} from "./controllers/user/DetailUserController";
import {isAuthenticated} from "../middleware/IsAuthenticated";
import {CreateCategoryController} from "./controllers/category/CreateCategoryController";
import {ListCategoryController} from "./controllers/category/ListCategoryController";
import {CreateProductController} from "./controllers/product/CreateProductController";
import uploadConfig from './config/multer';
import {ListByCategoryController} from "./controllers/product/ListByCategoryController";
import {CreateOrderController} from "./controllers/order/CreateOrderController";
import {DeleteOrderController} from "./controllers/order/DeleteOrderController";
import {AddItemController} from "./controllers/order/AddItemController";
import {DeleteItemController} from "./controllers/order/DeleteItemController";
import {ConfirmOrderController} from "./controllers/order/ConfirmOrderController";
import {ListOrderController} from "./controllers/order/ListOrderController";
import {FindOrderController} from "./controllers/order/FindOrderController";

export const router = Router();
const upload = multer(uploadConfig.upload("./temp"))

// Rotas User
router.post('/user', isValidUser, new CreateUserController().handle);
router.post('/session', isValidUser, new AuthUserController().handle);
router.get('/user-info', isAuthenticated, new DetailUserController().handle);

// Rotas Categoria
router.post('/category', isAuthenticated, new CreateCategoryController().handle);
router.get('/category', isAuthenticated, new ListCategoryController().handle);

// Rotas Produto
router.post('/product', isAuthenticated, upload.single('file'), new CreateProductController().handle);
router.get('/category/product', isAuthenticated, new ListByCategoryController().handle);

// Rotas Pedido
router.post('/order', isAuthenticated, new CreateOrderController().handle);
router.delete('/order', isAuthenticated, new DeleteOrderController().handle);
router.post('/order/item', isAuthenticated, new AddItemController().handle);
router.delete('/order/item', isAuthenticated, new DeleteItemController().handle);
router.put('/order/confirm', isAuthenticated, new ConfirmOrderController().handle);
router.get("/orders", isAuthenticated, new ListOrderController().handle);
router.get("/order", isAuthenticated, new FindOrderController().handle);