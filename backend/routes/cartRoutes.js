// // backend/routes/cartRoutes.js
// import express from "express";
// import { addToCart, getCart, removeFromCart } from "../controllers/cartController.js";
// import { verifyToken } from "../middleware/authMiddleware.js";

// const router = express.Router();

// router.post("/add", verifyToken, addToCart);
// router.get("/", verifyToken, getCart);
// router.delete("/remove/:id", verifyToken, removeFromCart);

// export default router;
import express from "express";
import {
  getCart,
  addToCart,
  removeFromCart,
  checkoutCart,
} from "../controllers/cartController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

// 🛒 Get user cart
router.get("/", verifyToken, getCart);

// ➕ Add item to cart
router.post("/add", verifyToken, addToCart);

// ➖ Remove item from cart
router.post("/remove", verifyToken, removeFromCart);

// ✅ Checkout
router.post("/checkout", verifyToken, checkoutCart);

export default router;
