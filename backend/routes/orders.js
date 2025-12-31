const express = require('express');
const router = express.Router();
const pool = require('../db');
const auth = require('../middleware/auth');

// Checkout - create order from cart (mock payment)
router.post('/checkout', auth, async (req, res) => {
  const conn = await pool.getConnection();
  try {
    await conn.beginTransaction();
    const userId = req.user.id;
    const [[cartRows]] = await conn.query('SELECT * FROM carts WHERE user_id = ?', [userId]);
    const [cartItems] = await conn.query(
      `SELECT ci.id as cart_item_id, i.id as item_id, i.price, ci.quantity FROM cart_items ci
       JOIN items i ON ci.item_id = i.id
       WHERE ci.cart_id = ?`, [cartRows.id]
    );
    if (!cartItems.length) {
      await conn.rollback();
      conn.release();
      return res.status(400).json({ error: 'cart empty' });
    }
    let total = 0;
    for (const it of cartItems) total += Number(it.price) * Number(it.quantity);
    // create order
    const [oRes] = await conn.query('INSERT INTO orders (user_id, total, status) VALUES (?, ?, ?)', [userId, total, 'paid']);
    const orderId = oRes.insertId;
    for (const it of cartItems) {
      await conn.query('INSERT INTO order_items (order_id, item_id, quantity, price) VALUES (?, ?, ?, ?)', [orderId, it.item_id, it.quantity, it.price]);
    }
    // clear cart
    await conn.query('DELETE FROM cart_items WHERE cart_id = ?', [cartRows.id]);
    await conn.commit();
    conn.release();
    res.json({ ok: true, orderId });
  } catch (e) {
    await conn.rollback();
    conn.release();
    console.error(e);
    res.status(500).json({ error: 'checkout failed' });
  }
});

// List user orders
router.get('/', auth, async (req, res) => {
  try {
    const userId = req.user.id;
    const [orders] = await pool.query('SELECT * FROM orders WHERE user_id = ? ORDER BY created_at DESC', [userId]);
    res.json({ orders });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'server error' });
  }
});

module.exports = router;
