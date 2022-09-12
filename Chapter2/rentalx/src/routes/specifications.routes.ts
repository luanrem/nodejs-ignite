import { Router } from "express";

import { SpecificationsRepository } from "../modules/cars/repositories/implementations/SpecificationsRepository";
import { CreateSpecificationService } from "../modules/cars/services/CreateSpecificationService";

const specificationsRoute = Router();

const specificationsRepository = new SpecificationsRepository();

specificationsRoute.post("/", (request, response) => {
  const { name, description } = request.body;
  const createSpecificationService = new CreateSpecificationService(
    specificationsRepository
  );

  createSpecificationService.execute({ name, description });

  return response.status(201).send();
});

export { specificationsRoute };
