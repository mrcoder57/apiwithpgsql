const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'todo_databse',
    password: '3108',
    port: 5432,
});

module.exports = pool;