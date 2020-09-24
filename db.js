
const Pool = require("pg").Pool;

 const pool = new Pool({
    user: "myuser",
    password: "mypassword",
    host: "localhost",
    port:5432,
    database: "perntodo" 
})

module.exports = pool;

 