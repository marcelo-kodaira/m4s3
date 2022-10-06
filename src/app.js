import express from "express";
import "dotenv/config";
import { startDatabase } from "./database";
import categoryRoutes from "./Routes/category.routes";
import productsRoutes from "./Routes/products.routes";

const app = express();
app.use(express.json());

app.use("/categories", categoryRoutes)
app.use("/products", productsRoutes)

export default app.listen(1024, () => {
  startDatabase()
  console.log("Server running");
});
