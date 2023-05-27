const { Schema, model } = require("mongoose");

const UsuarioSchema = Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    followers: {
      type: String,
      require: true,
    },
    following: {
      type: String,
      require: true,
    },
    photoUser: {
      type: String,
      require: false,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
  }
);
UsuarioSchema.virtual("publicaciones", {
  ref: "publicacion",
  localField: "_id",
  foreignField: "user",
  justOne: false,
});
UsuarioSchema.virtual("comentarios", {
  ref: "comentario",
  localField: "name",
  foreignField: "nameUser",
  justOne: false,
});

module.exports = model("Usuario", UsuarioSchema);
