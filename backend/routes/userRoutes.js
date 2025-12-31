// // // import express from "express";
// // // import { signupUser, loginUser } from "../controllers/userController.js";

// // // const router = express.Router();

// // // // Signup Route
// // // router.post("/signup", signupUser);

// // // // Login Route
// // // router.post("/login", loginUser);

// // // export default router;
// // // import express from "express";
// // // import { signupUser, loginUser } from "../controllers/userController.js";

// // // const router = express.Router();

// // // router.post("/signup", signupUser);
// // // router.post("/login", loginUser);

// // // export default router;
// // // backend/routes/userRoutes.js
// // // import express from "express";
// // // import multer from "multer";
// // // import { signupUser, loginUser } from "../controllers/userController.js";

// // // const router = express.Router();

// // // // Multer setup for file uploads
// // // const storage = multer.diskStorage({
// // //   destination: (req, file, cb) => cb(null, "uploads/"),
// // //   filename: (req, file, cb) => {
// // //     cb(null, Date.now() + "-" + file.originalname.replace(/\s+/g, ""));
// // //   },
// // // });
// // // const upload = multer({ storage });

// // // // Signup route with photo upload
// // // router.post("/signup", upload.single("photo"), signupUser);

// // // // Login route
// // // router.post("/login", loginUser);

// // // export default router;

// // import express from "express";
// // import multer from "multer";
// // import {
// //   signupUser,
// //   loginUser,
// //   getProfile,
// //   uploadPhoto,
// // } from "../controllers/userController.js";

// // const router = express.Router();

// // // Configure multer for photo uploads
// // const upload = multer({ dest: "uploads/" });

// // // Signup
// // router.post("/signup", upload.single("photo"), signupUser);

// // // Login
// // router.post("/login", loginUser);

// // // Get logged-in user profile (protected route)
// // router.get("/profile", getProfile);

// // // Update profile photo
// // router.post("/upload-photo", upload.single("photo"), uploadPhoto);

// // export default router;
// import express from "express";
// import multer from "multer";
// import {
//   signupUser,
//   loginUser,
//   getProfile,
//   uploadPhoto,
// } from "../controllers/userController.js";

// const router = express.Router();

// // ✅ Configure multer for photo uploads
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => cb(null, "uploads/"),
//   filename: (req, file, cb) =>
//     cb(null, Date.now() + "-" + file.originalname),
// });
// const upload = multer({ storage });

// // ✅ Routes
// router.post("/signup", upload.single("photo"), signupUser);
// router.post("/login", loginUser);
// router.get("/profile", getProfile);
// router.post("/upload-photo", upload.single("photo"), uploadPhoto);

// export default router;
import express from "express";
import multer from "multer";
import { googleLogin } from "../controllers/userController.js";
import {
  signupUser,
  loginUser,
  getProfile,
  uploadPhoto,
} from "../controllers/userController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) =>
    cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

// 🔓 PUBLIC ROUTES (NO TOKEN)
router.post("/signup", upload.single("photo"), signupUser);
router.post("/login", loginUser);
router.post("/google-login", googleLogin);
// 🔒 PROTECTED ROUTES (TOKEN REQUIRED)
router.get("/profile", verifyToken, getProfile);
router.post("/upload-photo", verifyToken, upload.single("photo"), uploadPhoto);

export default router;
