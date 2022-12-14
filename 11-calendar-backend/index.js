// Importar express
const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { dbConnection } = require("./db/config");

// process.env están todas las variables de entorno que se encuentran en el archivo .env
// console.log(process.env);

// Crear el servidor de express
const app = express();

// Base de datos
dbConnection();

// CORS: Para que el servidor pueda ser accedido desde cualquier lugar
app.use(cors());

// Directorio Público
// use: es un middleware, que se ejecuta siempre que alguien hace una petición
app.use(express.static("public"));

// Lectura y parseo del body
app.use(express.json());

// Rutas
// auth / crear, login, renew(renovar el token)
app.use("/api/auth", require("./routes/auth"));
app.use("/api/events", require("./routes/events"));

//TODO: CRUD: Eventos

//Escuchar peticiones
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});
