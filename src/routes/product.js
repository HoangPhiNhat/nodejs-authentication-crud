import { Router } from "express";
import {
  create,
  remove,
  getAll,
  getDetail,
  update,
} from "../controllers/product.js";
import { checkPermission } from "../middlewares/checkPermission.js";
const routerProduct = Router();

routerProduct.post("/", checkPermission, create);
routerProduct.get("/", getAll);
routerProduct.get("/:id", checkPermission, getDetail);
routerProduct.delete("/:id", checkPermission, remove);
routerProduct.put("/:id", checkPermission, update);

export default routerProduct;
