import UserController from "./controller/UserController";
import SessionController from "./controller/SessionController";
import express from "express";

const routes = express.Router();

routes.post("/register", UserController.store);
routes.post("/login", SessionController.store);

module.exports = routes;
