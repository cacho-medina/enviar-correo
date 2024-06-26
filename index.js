import express from "express";
import "dotenv/config";
import morgan from "morgan";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import correoRouter from "./src/routes/correo.route.js";

const app = express();

const PORT = process.env.PORT || 4004;

app.listen(PORT, () => {
    console.log("El servidor esta corriedo en: " + `http://localhost:${PORT}`);
});
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "/public")));

app.use("/", correoRouter);
