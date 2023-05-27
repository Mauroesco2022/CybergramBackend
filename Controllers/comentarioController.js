const express = require("express");
const Comment = require("../Models/comentarioScheme");

const crearComentario = async (req, res = express.request) => {
  comment = new Comment(req.body);
  try {
    comment.nameUser = req.name;
    await comment.save();
    res.status(200).json({
      ok: true,
      comment,
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
  crearComentario,
};
