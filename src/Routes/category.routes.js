import { Router } from "express";
import { createCategoryController, deleteCategoryController, listCategoryController, listCategoryIdController, patchCategoryController } from "../Controller/category.controller";

const categoryRoutes = Router()

categoryRoutes.post("", createCategoryController )
categoryRoutes.get("", listCategoryController)
categoryRoutes.get("/:id", listCategoryIdController)
categoryRoutes.patch("/:id", patchCategoryController)
categoryRoutes.delete("/:id", deleteCategoryController)

export default categoryRoutes