const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require('morgan')
const routes = require('./routes/departamento.routes')
const routes2 = require('./routes/inventario.routes')

app.use(morgan('dev'))
app.use(express.json());
app.use(cors());

//Rutas

app.use(routes, routes2)
app.use((err, req, res, next) => {
    return res.json({
        message: 'Error'
    })
})
app.listen(5000, () =>{
    console.log("server is running in port 5000")
});

