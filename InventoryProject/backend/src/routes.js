import { Router } from 'express';
import UserController from './app/controller/UserController';
import InventoryController from './app/controller/InventoryController';
import SessionController from './app/controller/SessionController';
import ItemController from './app/controller/ItemController';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/register', UserController.store);
routes.post('/login', SessionController.store);

routes.use(authMiddleware);

routes.post('/inventory/create', InventoryController.store);
routes.get('/inventory', InventoryController.index);
routes.post('/item/create', ItemController.store);
routes.delete('/inventory/delete', InventoryController.delete);
routes.delete('/item/delete', ItemController.delete);
routes.get('/item', ItemController.index);

export default routes;
