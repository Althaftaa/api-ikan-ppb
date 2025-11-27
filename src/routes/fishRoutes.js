// src/routes/fishRoutes.js
import express from "express";
import { FishController } from "../controllers/fishController.js";

const router = express.Router();

// Route untuk mendapatkan SEMUA ikan
router.get("/", FishController.getAll);

// Route untuk mendapatkan ikan berdasarkan TIPE (PENTING!)
router.get("/type/:type", FishController.getByType);

// Route untuk menambah ikan baru
router.post("/", FishController.create);

export default router;
