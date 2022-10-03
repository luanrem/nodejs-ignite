import { Router } from "express";
import multer from "multer";

import { CreateUserController } from "../modules/accounts/useCases/createUser/CreateUserController";
import { UpdateUserAvatarController } from "../modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController";

const usersRoute = Router();

const upload = multer({
  dest: "avatar",
});

const createUserController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();

usersRoute.post("/", createUserController.handle);

usersRoute.patch(
  "/avatar",
  upload.single("file"),
  updateUserAvatarController.handle
);

export { usersRoute };
