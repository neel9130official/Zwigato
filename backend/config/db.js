// import mysql from "mysql2/promise";
// import dotenv from "dotenv";
// dotenv.config();

// console.log("Loaded DB Config:", {
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
// });

// let db;

// try {
//   db = await mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASS,
//     database: process.env.DB_NAME,
//   });
//   console.log("✅ MySQL Connected Successfully!");
// } catch (err) {
//   console.error("❌ MySQL Connection Failed:", err.message);
//   process.exit(1);
// }

// export default db;
import mysql from "mysql2/promise";

// ❌ dotenv is NOT needed on Vercel
// dotenv.config(); ← remove this

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD, // ✅ FIXED
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Optional test log (safe)
pool
  .query("SELECT 1")
  .then(() => console.log("✅ MySQL Pool Connected"))
  .catch((err) => console.error("❌ MySQL Pool Error:", err.message));

export default pool;

