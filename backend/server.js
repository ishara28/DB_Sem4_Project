const express = require("express");
const bodyParser = require("body-parser");
const mysqlConnection = require("./connection");
const cors = require("cors");

var app = express();
app.use(cors());

app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;





app.listen(PORT, () => console.log("Server is running on Port : " + PORT));
