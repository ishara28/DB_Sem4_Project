const mysql = require("mysql");

var mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "ecom"
});

mysqlConnection.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected Successfully!");
});

module.exports = mysqlConnection;
