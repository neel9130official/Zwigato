// // // import bcrypt from "bcryptjs";
// // // import jwt from "jsonwebtoken";
// // // import db from "../config/db.js"; // your MySQL connection
// // // import dotenv from "dotenv";
// // // dotenv.config();

// // // const JWT_SECRET = process.env.JWT_SECRET || "secret123";

// // // // 🔹 SIGNUP
// // // export const signupUser = async (req, res) => {
// // //   try {
// // //     const { name, age, address, mobile, email, password } = req.body;
// // //     const photo = req.file ? `/uploads/${req.file.filename}` : null;

// // //     // check if user exists
// // //     const [existing] = await db.query("SELECT * FROM users WHERE email = ?", [
// // //       email,
// // //     ]);
// // //     if (existing.length > 0)
// // //       return res.status(400).json({ message: "User already exists" });

// // //     // hash password
// // //     const hashed = await bcrypt.hash(password, 10);

// // //     // insert user
// // //     await db.query(
// // //       "INSERT INTO users (name, age, address, mobile, email, password, photo) VALUES (?,?,?,?,?,?,?)",
// // //       [name, age, address, mobile, email, hashed, photo]
// // //     );

// // //     const [user] = await db.query("SELECT * FROM users WHERE email = ?", [
// // //       email,
// // //     ]);
// // //     const token = jwt.sign({ id: user[0].id }, JWT_SECRET, { expiresIn: "7d" });

// // //     res.json({ token, user: user[0] });
// // //   } catch (e) {
// // //     console.error(e);
// // //     res.status(500).json({ message: "Signup failed" });
// // //   }
// // // };

// // // // 🔹 LOGIN
// // // export const loginUser = async (req, res) => {
// // //   try {
// // //     const { email, password } = req.body;
// // //     const [user] = await db.query("SELECT * FROM users WHERE email = ?", [
// // //       email,
// // //     ]);

// // //     if (!user.length)
// // //       return res.status(400).json({ message: "User not found" });

// // //     const valid = await bcrypt.compare(password, user[0].password);
// // //     if (!valid)
// // //       return res.status(400).json({ message: "Invalid password" });

// // //     const token = jwt.sign({ id: user[0].id }, JWT_SECRET, { expiresIn: "7d" });

// // //     res.json({ token, user: user[0] });
// // //   } catch (e) {
// // //     console.error(e);
// // //     res.status(500).json({ message: "Login failed" });
// // //   }
// // // };
// // // import bcrypt from "bcryptjs";
// // // import jwt from "jsonwebtoken";
// // // import db from "../config/db.js";
// // // import dotenv from "dotenv";
// // // dotenv.config();

// // // const JWT_SECRET = process.env.JWT_SECRET || "secret123";

// // // // 🔹 SIGNUP
// // // // export const signupUser = async (req, res) => {
// // // //   try {
// // // //     const { name, age, address, mobile, email, password } = req.body;
// // // //     const photo = req.file ? `/uploads/${req.file.filename}` : null;

// // // export const signupUser = async (req, res) => {
// // //     try {
// // //         console.log("🟢 Received signup body:", req.body);
// // //         console.log("🟢 Received file:", req.file);


// // //         // Check if user already exists
// // //         const [existing] = await db.query("SELECT * FROM users WHERE email = ?", [email]);
// // //         if (existing.length > 0)
// // //             return res.status(400).json({ message: "User already exists" });

// // //         // Hash password
// // //         const hashed = await bcrypt.hash(password, 10);

// // //         // Insert new user
// // //         await db.query(
// // //             "INSERT INTO users (name, age, address, mobile, email, password, photo) VALUES (?,?,?,?,?,?,?)",
// // //             [name, age, address, mobile, email, hashed, photo]
// // //         );

// // //         const [user] = await db.query("SELECT * FROM users WHERE email = ?", [email]);
// // //         const token = jwt.sign({ id: user[0].id }, JWT_SECRET, { expiresIn: "7d" });

// // //         res.json({ token, user: user[0] });
// // //     } catch (e) {
// // //         console.error(e);
// // //         res.status(500).json({ message: "Signup failed" });
// // //     }
// // // };

// // // 🔹 LOGIN
// // // export const loginUser = async (req, res) => {
// // //     try {
// // //         const { email, password } = req.body;
// // //         const [user] = await db.query("SELECT * FROM users WHERE email = ?", [email]);

// // //         if (!user.length)
// // //             return res.status(400).json({ message: "User not found" });

// // //         const valid = await bcrypt.compare(password, user[0].password);
// // //         if (!valid)
// // //             return res.status(400).json({ message: "Invalid password" });

// // //         const token = jwt.sign({ id: user[0].id }, JWT_SECRET, { expiresIn: "7d" });

// // //         res.json({ token, user: user[0] });
// // //     } catch (e) {
// // //         console.error(e);
// // //         res.status(500).json({ message: "Login failed" });
// // //     }
// // // };
// // // backend/controllers/userController.js
// // import bcrypt from "bcryptjs";
// // import jwt from "jsonwebtoken";
// // import db from "../config/db.js";
// // import dotenv from "dotenv";
// // dotenv.config();

// // const JWT_SECRET = process.env.JWT_SECRET || "secret123";

// // export const signupUser = async (req, res) => {
// //   try {
// //     console.log("📩 Received body:", req.body);
// //     console.log("📸 Received file:", req.file);

// //     // Extract fields safely
// //     const { name, age, address, mobile, email, password } = req.body;

// //     // Validate
// //     if (!email || !password) {
// //       return res.status(400).json({ message: "Email and password are required" });
// //     }

// //     // Check existing user
// //     const [existing] = await db.query("SELECT * FROM users WHERE email = ?", [email]);
// //     if (existing.length > 0) {
// //       return res.status(400).json({ message: "User already exists" });
// //     }

// //     // Hash password
// //     const hashed = await bcrypt.hash(password, 10);

// //     // Prepare photo path (if uploaded)
// //     const photo = req.file ? `/uploads/${req.file.filename}` : null;

// //     // Insert into DB
// //     await db.query(
// //       "INSERT INTO users (name, age, address, mobile, email, password, photo) VALUES (?,?,?,?,?,?,?)",
// //       [name, age, address, mobile, email, hashed, photo]
// //     );

// //     // Get the created user
// //     const [user] = await db.query("SELECT * FROM users WHERE email = ?", [email]);

// //     // Create JWT
// //     const token = jwt.sign({ id: user[0].id }, JWT_SECRET, { expiresIn: "7d" });

// //     res.json({ token, user: user[0] });
// //   } catch (err) {
// //     console.error("❌ Signup error:", err);
// //     res.status(500).json({ message: "Signup failed" });
// //   }
// // };
// // // 🔹 LOGIN
// // export const loginUser = async (req, res) => {
// //     try {
// //         const { email, password } = req.body;
// //         const [user] = await db.query("SELECT * FROM users WHERE email = ?", [email]);

// //         if (!user.length)
// //             return res.status(400).json({ message: "User not found" });

// //         const valid = await bcrypt.compare(password, user[0].password);
// //         if (!valid)
// //             return res.status(400).json({ message: "Invalid password" });

// //         const token = jwt.sign({ id: user[0].id }, JWT_SECRET, { expiresIn: "7d" });

// //         res.json({ token, user: user[0] });
// //     } catch (e) {
// //         console.error(e);
// //         res.status(500).json({ message: "Login failed" });
// //     }
// // };
// // backend/controllers/userController.js
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";
// import db from "../config/db.js";
// import dotenv from "dotenv";
// dotenv.config();

// const JWT_SECRET = process.env.JWT_SECRET || "secret123";

// /**
//  * 🔹 SIGNUP CONTROLLER
//  */
// export const signupUser = async (req, res) => {
//     try {
//         console.log("📩 Received signup body:", req.body);
//         console.log("📸 Received file:", req.file);

//         // Safely extract fields from the body
//         const { name, age, address, mobile, email, password } = req.body;

//         // Validate required fields
//         if (!email || !password || !name) {
//             return res
//                 .status(400)
//                 .json({ message: "Name, Email and Password are required." });
//         }

//         // Check if user already exists
//         const [existing] = await db.query(
//             "SELECT * FROM users WHERE email = ?",
//             [email]
//         );
//         if (existing.length > 0) {
//             return res.status(400).json({ message: "User already exists." });
//         }

//         // Hash password safely
//         const hashed = await bcrypt.hash(password, 10);

//         // Handle uploaded photo (if any)
//         const photo = req.file ? `/uploads/${req.file.filename}` : null;

//         // Insert the new user into DB
//         await db.query(
//             `INSERT INTO users (name, age, address, mobile, email, password, photo)
//        VALUES (?, ?, ?, ?, ?, ?, ?)`,
//             [name, age || null, address || "", mobile || "", email, hashed, photo]
//         );

//         // Fetch the new user from DB
//         const [user] = await db.query("SELECT * FROM users WHERE email = ?", [email]);
//         const userData = user[0];

//         // Generate a signed JWT
//         const token = jwt.sign({ id: userData.id }, JWT_SECRET, {
//             expiresIn: "7d",
//         });

//         console.log(`✅ User created successfully: ${email}`);

//         // Respond with token + user info
//         return res.status(201).json({
//             message: "Signup successful",
//             token,
//             user: userData,
//         });
//     } catch (err) {
//         console.error("❌ Signup error:", err);
//         return res.status(500).json({
//             message: "Signup failed. Please try again later.",
//             error: err.message,
//         });
//     }
// };
// // export const getProfile = async (req, res) => {
// //     try {
// //         const authHeader = req.headers.authorization;
// //         if (!authHeader)
// //             return res.status(401).json({ message: "No token provided" });

// //         const token = authHeader.split(" ")[1];
// //         const decoded = jwt.verify(token, JWT_SECRET);

// //         const [rows] = await db.query("SELECT * FROM users WHERE id = ?", [
// //             decoded.id,
// //         ]);

// //         if (!rows.length)
// //             return res.status(404).json({ message: "User not found" });

// //         res.json({ user: rows[0], orders: [] }); // You can load orders later
// //     } catch (err) {
// //         console.error("❌ Profile fetch error:", err);
// //         res.status(401).json({ message: "Invalid or expired token" });
// //     }
// // };
// // ✅ Get Profile (with token verification)
// export const getProfile = async (req, res) => {
//   try {
//     const authHeader = req.headers.authorization;
//     console.log("🔍 Authorization header:", authHeader);

//     if (!authHeader) {
//       return res.status(401).json({ message: "No token provided" });
//     }

//     const token = authHeader.split(" ")[1];
//     const decoded = jwt.verify(token, process.env.JWT_SECRET || "secret123");

//     const [rows] = await db.query("SELECT * FROM users WHERE id = ?", [decoded.id]);
//     if (!rows.length) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     console.log("✅ User fetched:", rows[0].email);
//     res.json({ user: rows[0], orders: [] });
//   } catch (err) {
//     console.error("❌ Profile fetch error:", err);
//     res.status(401).json({ message: "Invalid or expired token" });
//   }
// };


// export const uploadPhoto = async (req, res) => {
//     try {
//         const authHeader = req.headers.authorization;
//         if (!authHeader)
//             return res.status(401).json({ message: "No token provided" });

//         const token = authHeader.split(" ")[1];
//         const decoded = jwt.verify(token, JWT_SECRET);

//         if (!req.file)
//             return res.status(400).json({ message: "No photo uploaded" });

//         const photoPath = `/uploads/${req.file.filename}`;

//         await db.query("UPDATE users SET photo = ? WHERE id = ?", [
//             photoPath,
//             decoded.id,
//         ]);

//         res.json({ photo: photoPath });
//     } catch (err) {
//         console.error("❌ Upload error:", err);
//         res.status(500).json({ message: "Failed to upload photo" });
//     }
// };

// /**
//  * 🔹 LOGIN CONTROLLER
//  */
// export const loginUser = async (req, res) => {
//     try {
//         const { email, password } = req.body;

//         // Validate inputs
//         if (!email || !password) {
//             return res
//                 .status(400)
//                 .json({ message: "Email and Password are required." });
//         }

//         // Check if user exists
//         const [user] = await db.query("SELECT * FROM users WHERE email = ?", [email]);
//         if (!user.length) {
//             return res.status(400).json({ message: "User not found." });
//         }

//         // Compare passwords
//         const valid = await bcrypt.compare(password, user[0].password);
//         if (!valid) {
//             return res.status(400).json({ message: "Invalid password." });
//         }

//         // Generate token
//         const token = jwt.sign({ id: user[0].id }, JWT_SECRET, { expiresIn: "7d" });

//         console.log(`✅ Login successful for: ${email}`);

//         // Return response
//         return res.json({
//             message: "Login successful",
//             token,
//             user: user[0],
//         });
//     } catch (err) {
//         console.error("❌ Login error:", err);
//         return res.status(500).json({
//             message: "Login failed. Please try again later.",
//             error: err.message,
//         });
//     }
// };
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import db from "../config/db.js";
import dotenv from "dotenv";
import { OAuth2Client } from "google-auth-library";


dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || "secret123";

/**
 * 🔹 SIGNUP CONTROLLER
 */
export const signupUser = async (req, res) => {
  try {
    console.log("📩 Received signup body:", req.body);
    console.log("📸 Received file:", req.file);

    const { name, age, address, mobile, email, password } = req.body;

    if (!email || !password || !name) {
      return res
        .status(400)
        .json({ message: "Name, Email and Password are required." });
    }

    const [existing] = await db.query("SELECT * FROM users WHERE email = ?", [
      email,
    ]);
    if (existing.length > 0) {
      return res.status(400).json({ message: "User already exists." });
    }

    const hashed = await bcrypt.hash(password, 10);
    const photo = req.file ? `/uploads/${req.file.filename}` : null;

    await db.query(
      `INSERT INTO users (name, age, address, mobile, email, password, photo)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [name, age || null, address || "", mobile || "", email, hashed, photo]
    );

    const [user] = await db.query("SELECT * FROM users WHERE email = ?", [
      email,
    ]);
    const userData = user[0];
    const token = jwt.sign({ id: userData.id }, JWT_SECRET, { expiresIn: "7d" });

    console.log(`✅ User created successfully: ${email}`);
    return res.status(201).json({ message: "Signup successful", token, user: userData });
  } catch (err) {
    console.error("❌ Signup error:", err);
    return res.status(500).json({ message: "Signup failed", error: err.message });
  }
};

/**
 * 🔹 LOGIN CONTROLLER
 */
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({ message: "Email and Password are required." });

    const [user] = await db.query("SELECT * FROM users WHERE email = ?", [email]);
    if (!user.length) return res.status(400).json({ message: "User not found." });

    const valid = await bcrypt.compare(password, user[0].password);
    if (!valid) return res.status(400).json({ message: "Invalid password." });

    const token = jwt.sign({ id: user[0].id }, JWT_SECRET, { expiresIn: "7d" });

    console.log(`✅ Login successful for: ${email}`);
    return res.json({ message: "Login successful", token, user: user[0] });
  } catch (err) {
    console.error("❌ Login error:", err);
    return res.status(500).json({ message: "Login failed", error: err.message });
  }
};

/**
 * 🔹 PROFILE CONTROLLER (Protected)
 */
export const getProfile = async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    console.log("🔍 Authorization header:", authHeader);

    if (!authHeader) {
      return res.status(401).json({ message: "No token provided" });
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, JWT_SECRET);

    const [rows] = await db.query("SELECT * FROM users WHERE id = ?", [decoded.id]);
    if (!rows.length)
      return res.status(404).json({ message: "User not found" });

    console.log("✅ User fetched:", rows[0].email);
    return res.json({ user: rows[0], orders: [] });
  } catch (err) {
    console.error("❌ Profile fetch error:", err);
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

/**
 * 🔹 UPLOAD PHOTO CONTROLLER
 */
export const uploadPhoto = async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader)
      return res.status(401).json({ message: "No token provided" });

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, JWT_SECRET);

    if (!req.file)
      return res.status(400).json({ message: "No photo uploaded" });

    const photoPath = `/uploads/${req.file.filename}`;
    await db.query("UPDATE users SET photo = ? WHERE id = ?", [
      photoPath,
      decoded.id,
    ]);

    res.json({ photo: photoPath });
  } catch (err) {
    console.error("❌ Upload error:", err);
    res.status(500).json({ message: "Failed to upload photo" });
  }
};


import User from "../models/User.js";

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export const googleLogin = async (req, res) => {
  try {
    const { token } = req.body;

    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    const { email, name, picture } = payload;

    let user = await User.findOne({ email });

    // 🔹 If user doesn't exist → create
    if (!user) {
      user = await User.create({
        name,
        email,
        photo: picture,
        provider: "google",
      });
    }

    // 🔹 Issue your own JWT
    const appToken = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.status(200).json({
      success: true,
      token: appToken,
      user,
    });
  } catch (error) {
    console.error("Google login error:", error);
    res.status(401).json({ message: "Google authentication failed" });
  }
};
