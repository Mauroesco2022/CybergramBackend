const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const { validarJWT } = require("../middlewares/validar-token");
const {
  crearPublicacion,
  listarPublicaciones,
} = require("../Controllers/publicacionController");
const { validarCampos } = require("../middlewares/validar-campos");

router.use(validarJWT);

router.post(
  "/newPublicacion",
  [check("photo", "La foto es obligatoria").not().isEmpty(), validarCampos],
  crearPublicacion
);

router.get("/listarPubli", listarPublicaciones);

module.exports = router;
