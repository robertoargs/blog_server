const mysql = require('mysql');

module.exports = mysql.createPool({
  host            : process.env.DB_HOST,
  user            : process.env.DB_USER,
  password        : process.env.DB_PASS,
  database        : process.env.DB_NAME,
  port            : process.env.DB_PORT,
  connectionLimit : process.env.DB_CONNECTION,
  //Para trabajar con emojis debe tener configuración
  charset         : 'utf8mb4'
});