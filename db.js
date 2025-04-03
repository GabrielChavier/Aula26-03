const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'deputados'
});


connection.getConnection()
.then(() => console.log("Banco conectado"))
.catch(err => console.log("Erro conexao", err.message));

module.exports = connection;
