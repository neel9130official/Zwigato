const express = require('express');
const router = express.Router();
const pool = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');
const multer = require('multer');
const path = require('path');


const JWT_SECRET = process.env.JWT_SECRET || 'devsecret';
// Configure multer for uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../uploads'));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});
const upload = multer({ storage });


// signup
// router.post('/signup', async (req, res) => {
//   try {
//     const { name, age, address, mobile, email, password } = req.body;
//     if (!email || !password) return res.status(400).json({ error: 'email and password required' });

//     const [existing] = await pool.query('SELECT id FROM users WHERE email = ?', [email]);
//     if (existing.length) return res.status(400).json({ error: 'email already used' });

//     const hash = await bcrypt.hash(password, 10);
//     const uuid = uuidv4();

//     const [result] = await pool.query(
//       `INSERT INTO users (uuid, name, age, address, mobile, email, password_hash)
//        VALUES (?, ?, ?, ?, ?, ?, ?)`,
//       [uuid, name, age || null, address || null, mobile || null, email, hash]
//     );

//     const userId = result.insertId;
//     await pool.query('INSERT INTO carts (user_id) VALUES (?)', [userId]);

//     const token = jwt.sign({ id: userId, uuid }, JWT_SECRET, { expiresIn: '7d' });
//     res.json({ token, user: { id: userId, uuid, name, email } });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'server error' });
//   }
// });
// ✅ Signup with optional photo upload
router.post('/signup', upload.single('photo'), async (req, res) => {
  try {
    const { name, age, address, mobile, email, password } = req.body;
    const photo = req.file ? `/uploads/${req.file.filename}` : null;

    const [[existing]] = await pool.query('SELECT id FROM users WHERE email = ?', [email]);
    if (existing) return res.status(400).json({ error: 'Email already registered' });

    const [result] = await pool.query(
      'INSERT INTO users (uuid, name, age, address, mobile, email, password, photo) VALUES (UUID(), ?, ?, ?, ?, ?, ?, ?)',
      [name, age, address, mobile, email, password, photo]
    );

    const [[user]] = await pool.query('SELECT * FROM users WHERE id = ?', [result.insertId]);
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '7d' });

    res.json({ token, user });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'server error' });
  }
});


// login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
    if (!rows.length) return res.status(401).json({ error: 'invalid credentials' });
    const user = rows[0];
    const ok = await bcrypt.compare(password, user.password_hash);
    if (!ok) return res.status(401).json({ error: 'invalid credentials' });
    const token = jwt.sign({ id: user.id, uuid: user.uuid }, JWT_SECRET, { expiresIn: '7d' });
    res.json({ token, user: { id: user.id, uuid: user.uuid, name: user.name, email: user.email } });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'server error' });
  }
});

const auth = require('../middleware/auth');

// ✅ Get user profile & order history
router.get('/profile', auth, async (req, res) => {
  try {
    const userId = req.user.id;

    // Get user details
    const [userRows] = await pool.query(
      'SELECT id, uuid, name, age, address, mobile, email, created_at FROM users WHERE id = ?',
      [userId]
    );
    const user = userRows[0];

    if (!user) return res.status(404).json({ error: 'User not found' });

    // Get orders + items
    const [orders] = await pool.query(
      `SELECT o.id, o.total, o.status, o.created_at
       FROM orders o
       WHERE o.user_id = ? ORDER BY o.created_at DESC`,
      [userId]
    );

    // For each order, fetch items
    for (const order of orders) {
      const [orderItems] = await pool.query(
        `SELECT oi.quantity, oi.price, i.name
         FROM order_items oi
         JOIN items i ON oi.item_id = i.id
         WHERE oi.order_id = ?`,
        [order.id]
      );
      order.items = orderItems;
    }

    res.json({ user, orders });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'server error' });
  }
});
// ✅ Update / upload profile photo later
router.post('/upload-photo', auth, upload.single('photo'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: 'No file uploaded' });
    const photoPath = `/uploads/${req.file.filename}`;
    await pool.query('UPDATE users SET photo = ? WHERE id = ?', [photoPath, req.user.id]);
    res.json({ ok: true, photo: photoPath });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'server error' });
  }
});



module.exports = router;
