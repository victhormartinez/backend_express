const mongoose = require("mongoose");

const esquemaTarea = mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    tarea: {
        type: String,
        required: true
    },
    fecha: {
        type: String,
        required: true
    },
    etiqueta: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Tareas', esquemaTarea);