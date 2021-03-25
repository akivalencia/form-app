const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'adilenevalencia',
    password:'',
    host: 'localhost',
    port: 5432,
    database: 'contactform'
});

module.exports = pool;