import express from "express";
import {
  deleteUser,
  signOut,
  test,
  update,
} from "../controllers/user.controllers.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.get("/test", test);
router.put("/update/:userId", verifyToken, update);
router.delete("/delete/:userId", verifyToken, deleteUser);
router.post("/signout", signOut);

export default router;
