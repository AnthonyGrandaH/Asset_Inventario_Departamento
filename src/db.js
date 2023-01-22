const { password } = require("pg/lib/defaults")
const {db} = require('./config')
const Pool = require("pg").Pool

const pool = new Pool({
    user: db.user,
    password: db.password,
    host: db.host,
    port: db.port,
    database: db.database
});


module.exports = pool;