const mysql = require("mysql2");

// Create a MySQL connection pool
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb",
});

// Export the connection pool
module.exports = pool;
