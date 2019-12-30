const router = require("express").Router();
const mysqlConnection = require("../connection");
var session = require("express-session");

//Get All Products
router.route("/").get((req, res) => {
  console.log("received");
  const qry = "SELECT * FROM product";
  mysqlConnection.query(qry, function(err, result, fields) {
    if (err) throw err;
    res.json(result);
  });
});

//Get All Products according to category
router.route("/category/:category").get((req, res) => {
  var category = req.params.category;
  const sql =
    "SELECT * FROM product natural join category where category_name=?";
  mysqlConnection.query(sql, category, (err, result, fields) => {
    if (err) throw err;
    res.json(result);
  });
});

//Add a Product
router.post("/addproduct", (req, res) => {
  var data = {
    product_id: req.body.productId,
    title: req.body.title,
    weight: req.body.weight,
    category_id: req.body.categoryId
  };

  mysqlConnection.query("INSERT INTO product SET ?", data, (err, result) => {
    if (err) throw err;
    res.json("1 Row Inserted!");
  });
});

//Get A Product Details with given product Id
router.route("/showcase/:id").get((req, res) => {
  var id = req.params.id;

  const qry = "SELECT * FROM product where product_id=?";
  mysqlConnection.query(qry, id, (err, result, fields) => {
    if (err) throw err;
    res.json(result);
  });
});

// Update details of product with given Product Id
router.route("/update/:id").post((req, res) => {
  var productId = req.params.id;
  var data = {
    title: req.body.title,
    weight: req.body.weight,
    category_id: req.body.categoryId
  };
  var sql = `UPDATE product SET ? WHERE product_id = ` + productId;
  mysqlConnection.query(sql, data, (err, result) => {
    if (err) throw err;
    res.json(
      result.affectedRows + " record(s) updated with productId " + productId
    );
  });
});

//Test Session variables
router.route("/getsession").get((req, res) => {
  res.json(req.session);
});

module.exports = router;
