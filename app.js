const express = require('express');

const mongoose = require('mongoose');
const cors = require('cors');
require("dotenv").config();
const rutaTareas = require("./src/routes/tareas");

const app = express();
const port = process.env.PORT || 8000;

// CONFIGURACION DE CORS
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type']
}));

// MIDDLEWARE PARA CASTEAR EL JSON, CREAR BASE 'API' E INICIALIZAR A LA RUTA DE PROFESORES.
app.use(express.json());
app.use('/api', rutaTareas);

app.get("/", (req, res) => {
    res.send("Ruta base.");
})

// SE INSTANCIA LA CONEXION A ATLAS DESDE VARIABLE EN .ENV, REQUIRIÓ DOTENV
mongoose.connect( process.env.url_mongodb_atlas_cluster0)
    .then(() => console.log("Conectado con Atlas"))
    .catch((error) => console.error(error));

app.listen(port, () => console.log(`La aplicación estácorriendo en http://localhost:${port}`));

