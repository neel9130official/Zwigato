const mysql = require('mysql2/promise');
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  database: process.env.DB_NAME || 'zwigato',
  password: process.env.DB_PASS || '',
  waitForConnections: true,
  connectionLimit: 10
});
module.exports = pool;
