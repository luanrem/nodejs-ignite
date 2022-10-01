import { Router } from "express";

import { CreateUserController } from "../modules/accounts/useCases/createUser/CreateUserController";

const usersRoute = Router();

const createUserController = new CreateUserController();

usersRoute.post("/", createUserController.handle);

export { usersRoute };
