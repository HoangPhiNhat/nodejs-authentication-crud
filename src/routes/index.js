import { Router } from "express";
import routerProduct from "./product.js";
import routerAuth from "./auth.js";
const router = Router();
router.use("/product", routerProduct);
router.use("/auth", routerAuth);

export default router;
