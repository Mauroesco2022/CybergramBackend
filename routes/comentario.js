const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const { crearComentario } = require("../Controllers/comentarioController");
const { validarCampos } = require("../middlewares/validar-campos");
const { PublicacionExiste } = require("../helpers/db_validators");
const { validarJWT } = require("../middlewares/validar-token");

router.use(validarJWT);

router.post(
  "/Post",
  [
    check("contentComment", "Debe de haber un contenido").not().isEmpty(),
    check("publicacion").custom(PublicacionExiste),
    validarCampos,
  ],
  crearComentario
);

module.exports = router;
