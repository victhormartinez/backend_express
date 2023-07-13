const express =  require("express");
const esquemaTarea = require("../modelos/tareas");

const router = express.Router();

// CREAR TAREA
router.post("/tareas", (req, res) => {
    const tarea = esquemaTarea(req.body);
    tarea.save()
        .then((data) => res.json(data))
        .catch((error) =>res.json({error: error}));
})

// LISTAR TAREAS
router.get("/tareas", (req, res) => {
    esquemaTarea
        .find()
        .then((data) => res.json(data))
        .catch((error) =>res.json({error: error}));
})

// LISTAR TAREA POR ID
router.get("/tareas/:paramId", (req, res) => {
    const { paramId} = req.params;
    esquemaTarea
        .findById(paramId)
        .then((data) => res.json(data))
        .catch((error) =>res.json({error: error}));
})

// ACTUALIZAR TAREA POR ID
router.put("/tareas/:paramId", (req, res) => {
    const { paramId } = req.params;
    const { id, tarea, fecha, etiqueta } = req.body
    esquemaTarea
        .updateOne({ _id: paramId }, {$set: { id, tarea, fecha, etiqueta }})
        .then((data) => res.json(data))
        .catch((error) =>res.json({error: error}));
})

// ELIMINAR TAREA POR ID
router.delete("/tareas/:paramId", (req, res) => {
    const { paramId } = req.params;
    esquemaTarea
        .deleteOne({ _id: paramId })
        .then((data) => res.json(data))
        .catch((error) =>res.json({error: error}));
})

module.exports = router;