const { createProgram } = require("./crud/create");
const {
  programaCN,
  programaCS,
  programaG,
} = require("./programaSecundarioCordoba");

//creo los programas de la provincia de cordoba.

createProgram(
  "Ministerio de Educación-Cordoba-Nivel Medio-Orientacion Ciencias Sociales",
  programaCS
);
createProgram(
  "Ministerio de Educación-Cordoba-Nivel Medio-Orientacion Ciencias Naturales",
  programaCN
);
createProgram(
  "Ministerio de Educación-Cordoba-Nivel Medio-Orientacion Economía y Administración",
  programaG
);
