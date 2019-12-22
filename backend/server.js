const express = require("express");
const bodyParser = require("body-parser");
const mysqlConnection = require("./connection");
const cors = require("cors");

var app = express();
app.use(cors());

app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

const productsRouter = require("./routes/products");
const categoryRouter = require("./routes/category");
const userRouter = require("./routes/user2");


app.use("/products", productsRouter);
app.use("/category", categoryRouter);
app.use("/user", userRouter);


app.listen(PORT, () => console.log("Server is running on Port : " + PORT));
