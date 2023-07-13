const express = require('express');
const holamundo = express();
const mongoose = require("mongoose");
require("dotenv").config();

holamundo.get('/', (req, res) => res.send('Hola Mundo!'));

mongoose.connect( process.env.url_mongodb_atlas_cluster0)
    .then(() => console.log("Connected to MongoDB Atlas"))
    .catch((error) => console.error(error));


module.exports = holamundo;
