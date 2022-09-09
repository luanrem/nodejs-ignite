import { Router } from "express";

interface Categories {
  name: string;
  description: string;
}

const categoriesRoutes = Router();

const categories: Categories[] = [];

categoriesRoutes.post("/categories", (request, response) => {
  const { name, description } = request.body;

  categories.push({
    name,
    description,
  });

  return response.status(201).send();
});

export { categoriesRoutes };
