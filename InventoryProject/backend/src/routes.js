import UserController from '../app/controller/UserController';
import express from 'express';


const routes = express.Router();

routes.post('/register', UserController.store);


module.exports = routes;