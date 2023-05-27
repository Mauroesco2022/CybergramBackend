const express = require("express");
const Publicacion = require("../Models/publicacionScheme");

const crearPublicacion = async (req, res = express.request) => {
  const publicacion = new Publicacion(req.body);
  try {
    publicacion.user = req.uid;
    const saved = await publicacion.save();

    res.status(200).json({
      ok: true,
      publicacion: saved,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      publicacion: "Internal error",
    });
  }
};

const listarPublicaciones = async (req, res = express.request) => {
  const { id } = req.uid;
  try {
    let publicacion = await Publicacion.find({ id: id });

    res.status(200).json({
      ok: true,
      publicacion,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      error,
    });
  }
};

module.exports = {
  crearPublicacion,
  listarPublicaciones,
};
