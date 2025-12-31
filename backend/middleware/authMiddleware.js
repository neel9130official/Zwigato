// // // backend/middleware/authMiddleware.js
// // import jwt from "jsonwebtoken";
// // import dotenv from "dotenv";
// // dotenv.config();

// // export const verifyToken = (req, res, next) => {
// //   const authHeader = req.headers.authorization;

// //   if (!authHeader) return res.status(401).json({ message: "No token provided" });

// //   try {
// //     const token = authHeader.split(" ")[1];
// //     const decoded = jwt.verify(token, process.env.JWT_SECRET || "secret123");
// //     req.user = { id: decoded.id };
// //     next();
// //   } catch (err) {
// //     console.error("❌ Invalid token:", err);
// //     res.status(401).json({ message: "Invalid or expired token" });
// //   }
// // };
// import jwt from "jsonwebtoken";
// import dotenv from "dotenv";
// dotenv.config();

// export const verifyToken = (req, res, next) => {
//   const authHeader = req.headers.authorization;
//   if (!authHeader)
//     return res.status(401).json({ message: "No token provided" });

//   const token = authHeader.split(" ")[1];
//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET || "secret123");
//     req.user = { id: decoded.id };
//     next();
//   } catch (err) {
//     console.error("❌ Token verification failed:", err);
//     res.status(401).json({ message: "Invalid or expired token" });
//   }
// };
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const verifyToken = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "No token provided" });
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || "secret123"
    );

    req.user = { id: decoded.id };
    next();
  } catch (err) {
    console.error("❌ Token verification failed:", err.message);
    return res
      .status(401)
      .json({ message: "Invalid or expired token" });
  }
};
