const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '10203040',
  database: 'deputados'
});

module.exports = connection;
