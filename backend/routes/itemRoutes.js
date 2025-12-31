import express from "express";
import db from "../config/db.js";

const router = express.Router();

// GET all items
router.get("/", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM items");
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching items" });
  }
});

export default router;
