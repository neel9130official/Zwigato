const express = require('express');
const router = express.Router();
const pool = require('../db');

// return items grouped by category (simple flat list)
router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query(
      `SELECT i.*, c.name as category_name FROM items i
       LEFT JOIN categories c ON i.category_id = c.id
       WHERE i.available = 1 ORDER BY c.name, i.name`
    );
    res.json(rows);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'server error' });
  }
});

// seed helper (for dev) - creates sample categories and items
router.post('/seed', async (req, res) => {
  try {
    // sample categories and items
    const cats = ['Burgers','Pizza','Biryani','Drinks'];
    for (const name of cats) {
      await pool.query('INSERT IGNORE INTO categories (name) VALUES (?)', [name]);
    }
    const [cRows] = await pool.query('SELECT * FROM categories');
    const catMap = {};
    cRows.forEach(r => catMap[r.name]=r.id);
    const sample = [
      ['Veg Burger','Tasty veg patty burger',99,'Burgers'],
      ['Cheese Pizza','Medium cheese pizza',299,'Pizza'],
      ['Veg Biryani','Fragrant veg biryani',159,'Biryani'],
      ['Cold Drink','500ml cold drink',49,'Drinks']
    ];
    for (const [n,d,p,cat] of sample) {
      await pool.query(`INSERT INTO items (name, description, price, category_id, image_url, available)
        VALUES (?, ?, ?, ?, ?, 1)`, [n,d,p,catMap[cat], '']);
    }
    res.json({ ok: true });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'seed failed' });
  }
});
// allow GET in browser (redirects to same logic)
router.get('/seed', async (req, res) => {
  try {
    const axios = require('axios');
    await axios.post(`http://localhost:${process.env.PORT || 5000}/api/items/seed`);
    res.send("✅ Items seeded successfully! You can close this tab now.");
  } catch (e) {
    console.error(e);
    res.status(500).send("❌ Seeding failed. Check backend console.");
  }
});


module.exports = router;
