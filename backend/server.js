const express = require("express");
const bodyParser = require("body-parser");
const mysqlConnection = require("./connection");
const cors = require("cors");
var session = require("express-session");

var app = express();
app.use(cors());

app.use(bodyParser.json());

app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true
  })
);

const PORT = process.env.PORT || 5000;

const productsRouter = require("./routes/products");
const categoryRouter = require("./routes/category");

const userRouter = require("./routes/user");
const adminRouter = require("./routes/admin");
const orderRouter = require("./routes/order");
const sessionRouter = require("./routes/sessions");
const adminRouter = require('./routes/admin')


app.use("/products", productsRouter);
app.use("/category", categoryRouter);
app.use("/user", userRouter);

app.use("/admin", adminRouter);
app.use("/order", orderRouter);
app.use("/sessions", sessionRouter);


app.listen(PORT, () => console.log("Server is running on Port : " + PORT));
