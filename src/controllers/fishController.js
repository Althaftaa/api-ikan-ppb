// src/controllers/fishController.js
import { FishModel } from "../models/fishModel.js";

export const FishController = {
  // Ambil SEMUA ikan
  async getAll(req, res) {
    try {
      const fish = await FishModel.getAll();
      res.json(fish);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  // Ambil ikan berdasarkan TIPE (Air Tawar / Air Laut)
  async getByType(req, res) {
    try {
      const { type } = req.params;
      const fish = await FishModel.getByType(type);
      res.json(fish);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  // Tambah ikan baru
  async create(req, res) {
    try {
      const newFish = await FishModel.create(req.body);
      res
        .status(201)
        .json({ message: "Ikan berhasil ditambahkan!", data: newFish });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },
};
