import { Router } from "express";
import { v4 as uuidv4 } from "uuid";

interface Categories {
  id: string;
  name: string;
  description: string;
}

const categoriesRoutes = Router();

const categories: Categories[] = [];

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const category = {
    id: uuidv4(),
    name,
    description,
  };

  categories.push(category);

  return response.status(201).send();
});

export { categoriesRoutes };
