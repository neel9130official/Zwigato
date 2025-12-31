const express = require('express');
const router = express.Router();
const pool = require('../db');
const auth = require('../middleware/auth');

// Get cart
router.get('/', auth, async (req, res) => {
  try {
    const userId = req.user.id;
    const [[cartRows]] = await pool.query('SELECT * FROM carts WHERE user_id = ?', [userId]);
    const [items] = await pool.query(
      `SELECT ci.id as cart_item_id, i.*, ci.quantity FROM cart_items ci
       JOIN items i ON ci.item_id = i.id
       WHERE ci.cart_id = ?`, [cartRows.id]
    );
    res.json({ cart: cartRows, items });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'server error' });
  }
});

// Add item to cart
// router.post('/add', auth, async (req, res) => {
//   try {
//     const userId = req.user.id;
//     const { item_id, quantity } = req.body;
//     const qty = parseInt(quantity) || 1;
//     const [[cartRows]] = await pool.query('SELECT * FROM carts WHERE user_id = ?', [userId]);
//     // check if already present
//     const [existing] = await pool.query('SELECT * FROM cart_items WHERE cart_id = ? AND item_id = ?', [cartRows.id, item_id]);
//     if (existing.length) {
//       await pool.query('UPDATE cart_items SET quantity = quantity + ? WHERE id = ?', [qty, existing[0].id]);
//     } else {
//       await pool.query('INSERT INTO cart_items (cart_id, item_id, quantity) VALUES (?, ?, ?)', [cartRows.id, item_id, qty]);
//     }
//     res.json({ ok: true });
//   } catch (e) {
//     console.error(e);
//     res.status(500).json({ error: 'server error' });
//   }
// });

// Add or update cart item (also handles negative qty)
router.post('/add', auth, async (req, res) => {
  try {
    const userId = req.user.id;
    const { item_id, quantity } = req.body;
    const qty = parseInt(quantity) || 1;

    const [[cartRows]] = await pool.query('SELECT * FROM carts WHERE user_id = ?', [userId]);
    if (!cartRows) return res.status(404).json({ error: 'cart not found' });

    const [existing] = await pool.query('SELECT * FROM cart_items WHERE cart_id = ? AND item_id = ?', [cartRows.id, item_id]);

    if (existing.length) {
      const newQty = existing[0].quantity + qty;
      if (newQty <= 0) {
        await pool.query('DELETE FROM cart_items WHERE id = ?', [existing[0].id]);
      } else {
        await pool.query('UPDATE cart_items SET quantity = ? WHERE id = ?', [newQty, existing[0].id]);
      }
    } else if (qty > 0) {
      await pool.query('INSERT INTO cart_items (cart_id, item_id, quantity) VALUES (?, ?, ?)', [cartRows.id, item_id, qty]);
    }

    res.json({ ok: true });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'server error' });
  }
});

// 🗑️ Remove item from cart
router.post('/remove', auth, async (req, res) => {
  try {
    const userId = req.user.id;
    const { item_id } = req.body;

    if (!item_id) return res.status(400).json({ error: 'item_id required' });

    // Find the user's cart
    const [[cartRows]] = await pool.query('SELECT * FROM carts WHERE user_id = ?', [userId]);
    if (!cartRows) return res.status(404).json({ error: 'cart not found' });

    // Delete item from cart
    await pool.query('DELETE FROM cart_items WHERE cart_id = ? AND item_id = ?', [cartRows.id, item_id]);

    res.json({ ok: true, message: 'Item removed successfully' });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'server error' });
  }
});


module.exports = router;
