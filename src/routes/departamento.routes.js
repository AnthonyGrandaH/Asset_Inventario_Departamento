const router = require("express").Router();
const pool = require("../db");
const {getAllDepartamento, getOneDepartamento, createDepartamento, deleteDepartamento, updateDepartamento} = require('../controllers/departamento.controller')

router.get('/departamentos', getAllDepartamento)

router.get('/departamentos/:id', getOneDepartamento)

router.post('/departamentos', createDepartamento)

router.put('/departamentos/:id', updateDepartamento)

router.delete('/departamentos/:id', deleteDepartamento)


module.exports = router;