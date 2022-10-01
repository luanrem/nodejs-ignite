import { Router } from "express";

import { categoriesRoutes } from "./categories.routes";
import { specificationsRoute } from "./specifications.routes";
import { usersRoute } from "./users.routes";

const router = Router();

router.use("/categories", categoriesRoutes);
router.use("/specifications", specificationsRoute);
router.use("/users", usersRoute);

export { router };
