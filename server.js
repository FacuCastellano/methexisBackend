const express = require("express");
const cors = require('cors');
const postRoutes = require('./src/routes/post')
const getRoutes = require('./src/routes/get')
//creo el servidor
const app = express();

//settings
const PORT = 3000;

//middlewares
app.use(express.json());
app.use("/public", express.static("./src/public")); // poner el prefijo = "/public", si pongo "./public" o "public" no anda.
app.use(cors()); //ver para que es esto.. si no lo pongo me tira un error en el frontend, como q la solicitud se hace bien pero le falta un permiso de acceso.
//routerr
app.use(postRoutes)
app.use(getRoutes)
// Configuración de rutas y middleware aquí

app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
