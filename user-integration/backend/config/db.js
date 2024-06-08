const Pool = require('pg').Pool;

const db = new Pool({
    user: 'catedratec',
    password: 'password',
    host: 'localhost',
    port: 5432,
    database: 'catedraapi',
});

module.exports = { db };
