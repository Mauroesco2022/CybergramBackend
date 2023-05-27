const Usuario = require("../Models/usuario");
const Publicacion = require("../Models/publicacionScheme");

const emailExiste = async (email = "") => {
  let usuario = await Usuario.findOne({ email: email });
  if (usuario) {
    throw new Error(`Este correo : ${email}  ya esta registrado `);
  }
};
const PublicacionExiste = async (id = "") => {
  let publi = await Publicacion.findOne({ id: id }).exec();
  if (publi) {
    throw new Error(`Este correo : ${id}  ya esta registrado `);
  }
};

module.exports = {
  emailExiste,
  PublicacionExiste,
};
