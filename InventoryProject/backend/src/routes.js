const express = require('express');
const SessionController = require('./controller/SessionController');
const InventoryController = require('./controller/InventoryController');


const routes = express.Router();

routes.post('/register', SessionController.createUser);
routes.post('/login', SessionController.login);
routes.post('/inventory', InventoryController.create);
routes.get('/inventory', InventoryController.index);

module.exports = routes;