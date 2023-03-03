import express from "express";
import {
  getProducts,
  getProduct,
  createProduct,
  deleteProduct,
  updateProduct,
  getProductsWithParams,
  getProductsPagination,
} from "../controllers/productController.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

// "/" refers to "/products"
router.get("/", getProductsWithParams);
router.get("/:id", getProduct);
router.post("/add", createProduct);
router.delete("/:id", verifyToken, deleteProduct);
router.patch("/:id", verifyToken, updateProduct);
router.get("/many/:ids", getProductsPagination);

export default router;
