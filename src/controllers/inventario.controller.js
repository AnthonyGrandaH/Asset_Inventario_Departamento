const pool = require("../db");

const getAllInventario = async (req, res, next) => {
    try {
        const result = await pool.query('select * from inventario')
        res.json(result.rows)
    } catch (error) {
        next(error)
    }

}

const getOneInventario = async (req, res, next) => {
    try {
        const { id } = req.params

        const result = await pool.query('select * from inventario where idinventario = $1', [id])

        if (result.rows.length === 0) {
            res.status(400).json({ message: 'No existen datos' })
        }

        res.json(result.rows)
    } catch (error) {
        next(error)
    }
}

const createInventario = async (req, res, next) => {
    const { descripcion, cantidad, fk_iddepartamento} = req.body
    const date = new Date();

    try {
        const result = await pool.query("INSERT INTO inventario (descripcion, cantidad, fk_iddepartamento, fecha_registro) VALUES ($1, $2, $3, $4)", [descripcion, cantidad, fk_iddepartamento, date])
        res.json(result.rows)
    } catch (error) {
        next(error)
    }

}

const updateInventario = async (req, res, next) => {
    try {
        const { id } = req.params
        const { descripcion, cantidad, fk_iddepartamento } = req.body
        const date = new Date();
        const result = await pool.query("UPDATE inventario SET descripcion = $2, cantidad = $3, fk_iddepartamento =$4, fecha_registro = $5 WHERE idinventario = $1 RETURNING *", [id, descripcion, cantidad, fk_iddepartamento, date])

        if (result.rows.length === 0) {
            res.status(400).json({ message: 'No existen datos' })
        }
        res.status(200).json({ message: 'Actualizado' })
        //res.json(result.rows)
    } catch (error) {
        next(error)
    }
}

const deleteInventario = async (req, res, next) => {
    try {
        const { id } = req.params

        const result = await pool.query('delete from inventario where idinventario = $1 RETURNING *', [id])

        if (result.rows.length === 0) {
            res.status(400).json({ message: 'No existen datos' })
        }

        res.status(204)
    } catch (error) {
        next(error)
    }

}

module.exports = {
    getAllInventario,
    getOneInventario,
    createInventario,
    updateInventario,
    deleteInventario
}