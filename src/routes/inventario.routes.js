const router = require("express").Router();
const pool = require("../db");
const { createInventario, deleteInventario, getAllInventario, getOneInventario, updateInventario } = require('../controllers/inventario.controller')

router.get('/inventario', getAllInventario)

router.get('/inventario/:id', getOneInventario)

router.post('/inventario', createInventario)

router.put('/inventario/:id', updateInventario)

router.delete('/inventario/:id', deleteInventario)


module.exports = router;