// // backend/controllers/cartController.js
// import db from "../config/db.js";

// // ✅ Add item to cart
// export const addToCart = async (req, res) => {
//   try {
//     const { item_id, quantity } = req.body;
//     const user_id = req.user.id;

//     if (!item_id) return res.status(400).json({ message: "Item ID required" });

//     // Check if already exists
//     const [existing] = await db.query(
//       "SELECT * FROM cart WHERE user_id = ? AND item_id = ?",
//       [user_id, item_id]
//     );

//     if (existing.length > 0) {
//       // Update quantity if already added
//       await db.query(
//         "UPDATE cart SET quantity = quantity + ? WHERE user_id = ? AND item_id = ?",
//         [quantity || 1, user_id, item_id]
//       );
//     } else {
//       // Insert new record
//       await db.query(
//         "INSERT INTO cart (user_id, item_id, quantity) VALUES (?, ?, ?)",
//         [user_id, item_id, quantity || 1]
//       );
//     }

//     res.json({ message: "Item added to cart" });
//   } catch (err) {
//     console.error("❌ Add to cart error:", err);
//     res.status(500).json({ message: "Failed to add item to cart" });
//   }
// };

// // ✅ Get user's cart
// export const getCart = async (req, res) => {
//   try {
//     const user_id = req.user.id;

//     const [items] = await db.query(
//       `SELECT c.id AS cart_id, i.name, i.price, c.quantity, i.image
//        FROM cart c
//        JOIN items i ON c.item_id = i.id
//        WHERE c.user_id = ?`,
//       [user_id]
//     );

//     res.json({ cart: items });
//   } catch (err) {
//     console.error("❌ Fetch cart error:", err);
//     res.status(500).json({ message: "Failed to load cart" });
//   }
// };

// // ✅ Remove item
// export const removeFromCart = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const user_id = req.user.id;

//     await db.query("DELETE FROM cart WHERE id = ? AND user_id = ?", [id, user_id]);

//     res.json({ message: "Item removed from cart" });
//   } catch (err) {
//     console.error("❌ Remove from cart error:", err);
//     res.status(500).json({ message: "Failed to remove item" });
//   }
// };
import db from "../config/db.js";

// 🛒 Get cart items for logged-in user
export const getCart = async (req, res) => {
  try {
    const [rows] = await db.query(
      `SELECT c.id, i.name, i.price, c.quantity
       FROM cart c
       JOIN items i ON c.item_id = i.id
       WHERE c.user_id = ?`,
      [req.user.id]
    );
    res.json({ items: rows });
  } catch (err) {
    console.error("❌ getCart error:", err);
    res.status(500).json({ message: "Failed to load cart" });
  }
};

// ➕ Add item to cart
export const addToCart = async (req, res) => {
  try {
    const { item_id, quantity } = req.body;
    const userId = req.user.id;

    // Check if item already in cart
    const [existing] = await db.query(
      "SELECT * FROM cart WHERE user_id = ? AND item_id = ?",
      [userId, item_id]
    );

    if (existing.length > 0) {
      // Update quantity
      await db.query(
        "UPDATE cart SET quantity = quantity + ? WHERE user_id = ? AND item_id = ?",
        [quantity, userId, item_id]
      );
    } else {
      // Insert new item
      await db.query(
        "INSERT INTO cart (user_id, item_id, quantity) VALUES (?, ?, ?)",
        [userId, item_id, quantity]
      );
    }

    res.json({ message: "Item added to cart" });
  } catch (err) {
    console.error("❌ addToCart error:", err);
    res.status(500).json({ message: "Failed to add item to cart" });
  }
};

// ➖ Remove item from cart
export const removeFromCart = async (req, res) => {
  try {
    const { item_id } = req.body;
    await db.query("DELETE FROM cart WHERE user_id = ? AND item_id = ?", [
      req.user.id,
      item_id,
    ]);
    res.json({ message: "Item removed from cart" });
  } catch (err) {
    console.error("❌ removeFromCart error:", err);
    res.status(500).json({ message: "Failed to remove item" });
  }
};

// 💳 Checkout (clear cart)
export const checkoutCart = async (req, res) => {
  try {
    await db.query("DELETE FROM cart WHERE user_id = ?", [req.user.id]);
    res.json({ message: "Checkout successful" });
  } catch (err) {
    console.error("❌ checkoutCart error:", err);
    res.status(500).json({ message: "Checkout failed" });
  }
};

