import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();

console.log("Loaded DB Config:", {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

let db;

try {
  db = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  });
  console.log("✅ MySQL Connected Successfully!");
} catch (err) {
  console.error("❌ MySQL Connection Failed:", err.message);
  process.exit(1);
}

export default db;
