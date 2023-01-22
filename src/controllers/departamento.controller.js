const pool = require("../db");

const getAllDepartamento = async (req, res, next) => {
    try {
        const result = await pool.query('select * from departamento')
        res.json(result.rows)
    } catch (error) {
        next(error)
    }

}

const getOneDepartamento = async (req, res, next) => {
    try {
        const { id } = req.params

        const result = await pool.query('select * from departamento where idDepartamento = $1', [id])

        if (result.rows.length === 0) {
            res.status(400).json({ message: 'No existen datos' })
        }

        res.json(result.rows)
    } catch (error) {
        next(error)
    }
}

const createDepartamento = async (req, res, next) => {
    const { nombre_departamento } = req.body
    try {
        const result = await pool.query("INSERT INTO departamento (nombre_departamento) VALUES ($1)", [nombre_departamento])
        res.json(result.rows)
    } catch (error) {
        next(error)
    }

}

const updateDepartamento = async (req, res, next) => {
    try {
        const { id } = req.params
        const { nombre_departamento } = req.body
        const result = await pool.query("UPDATE departamento SET nombre_departamento = $2 WHERE idDepartamento = $1", [id, nombre_departamento])

        if (result.rows.length === 0) {
            res.status(400).json({ message: 'No existen datos' })
        }

        res.json(result.rows)
    } catch (error) {
        next(error)
    }
}

const deleteDepartamento = async (req, res, next) => {
    try {
        const { id } = req.params

        const result = await pool.query('delete from departamento where idDepartamento = $1', [id])

        if (result.rows.length === 0) {
            res.status(400).json({ message: 'No existen datos' })
        }

        res.status(204)
    } catch (error) {
        next(error)
    }

}

module.exports = {
    getAllDepartamento,
    getOneDepartamento,
    createDepartamento,
    updateDepartamento,
    deleteDepartamento
}