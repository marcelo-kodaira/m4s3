import { Router } from "express";
import { createProductController, deleteProductController, listProductCategoriesController, listProductController, listProductIdController, patchProductController } from "../Controller/product.controller";

const productsRoutes = Router()

productsRoutes.post("", createProductController)
productsRoutes.get("", listProductController)
productsRoutes.get("/:id", listProductIdController)
productsRoutes.patch("/:id", patchProductController)
productsRoutes.delete("/:id", deleteProductController)
productsRoutes.get("/category/:categoryId", listProductCategoriesController)

export default productsRoutes