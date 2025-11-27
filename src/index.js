import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import categoryRoutes from "./routes/categoryRoutes.js";
import fishRoutes from "./routes/fishRoutes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/categories", categoryRoutes);
app.use("/api/fish", fishRoutes);

app.get("/", (req, res) => {
  res.send("API AquaPedia is running...");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
export default app;
