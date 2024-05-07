import { Router } from "express";
import { enviarCorreo } from "../controllers/correo.controllers.js";
const router = Router();

router.route("/").get((req, res) => {
    res.status(200).send("goal");
});
router.route("/enviar").post(enviarCorreo);

export default router;
