import { supabase } from "../config/supabaseClient.js";

export const FishModel = {
  // Ambil semua ikan
  async getAll() {
    // KITA HAPUS ", categories(name)" KARENA TABEL CATEGORIES TIDAK LAGI DIGUNAKAN
    const { data, error } = await supabase.from("fish").select("*");

    if (error) throw error;
    return data;
  },

  // Ambil berdasarkan tipe (Air Tawar / Air Laut)
  async getByType(type) {
    const { data, error } = await supabase
      .from("fish")
      .select("*")
      .eq("type", type);

    if (error) throw error;
    return data;
  },

  // Tambah ikan baru
  async create(fishData) {
    const { data, error } = await supabase
      .from("fish")
      .insert([fishData])
      .select();

    if (error) throw error;
    return data[0];
  },
};
