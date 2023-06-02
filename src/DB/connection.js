//busco las variables de entorno y las asigno a nuevas variables locales
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../../.env") });
console.log(process.env.VAR_A);
const MONGO_URL = process.env.MONGO_URL; //--> esta es la URL completa con usuario y pass..
const MONGOHOST = process.env.MONGOHOST;

const mongoose = require("mongoose");

//conecto a la BD
mongoose.connect(MONGO_URL, { useNewUrlParser: true });
const db = mongoose.connection;
//este evento se dispara cuando se conecto a la BD.
db.on("open", () => {
  console.log("database is connected to ", MONGOHOST);
});

//este evento se dispara cuando hubo un error en la coneccion a la BD.
db.on("error", (err) => {
  console.log("Ha ocurrido un error");
  console.log(err);
});

module.exports = db;
