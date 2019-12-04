const mysql = require("mysql");

var mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "db_sem4"
});

mysqlConnection.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected Successfully!");
});

module.exports = mysqlConnection;
