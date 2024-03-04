const mysql = require('mysql2')

const pool = mysql.createPool({
  host: 'localhost',
  port: '3000',
  user: 'root',
  database: 'Member Registration',
  password: 'anything',
}).promise()

pool.getConnection()
  .then(connection => {
    console.log('Connected to the database');
    connection.release()
  })
  .catch(error => {
    console.error('Error connecting to the database:', error);
  })

module.exports = pool
