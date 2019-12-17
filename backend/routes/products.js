const router = require("express").Router();
const mysqlConnection = require("../connection");

//Get All Products
router.route("/").get((req, res) => {
  mysqlConnection.query("SELECT * FROM product", function(err, result, fields) {
    if (err) throw err;
    res.json(result);
  });
});

//Get All Products according to category
router.route("/:category").get((req, res) => {
  var category_name = req.params.category;

  var sql =
    "SELECT * FROM product natural join category where category_name=? ";
  console.log(sql);
  mysqlConnection.query(
    sql,
    category_name,

    (err, result, fields) => {
      if (err) throw err;
      res.json(result);
    }
  );
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

//Get A Category Details with given category Id
router.route("/:id").get((req, res) => {
  var productId = req.params.id;
  mysqlConnection.query(
    "SELECT * FROM product WHERE product_id =" + productId,
    (err, result, fields) => {
      if (err) throw err;
      res.json(result);
    }
  );
});

//Delete a product with given product Id
router.route("/delete/:id").delete((req, res) => {
  var productId = req.params.id;
  var sql = "DELETE FROM product WHERE product_id = " + productId;
  mysqlConnection.query(sql, (err, result) => {
    if (err) throw err;
    if (result.affectedRows == 1) {
      res.json("Product Id with " + productId + " Deleted!");
    } else {
      res.json("Invalid Product Id");
    }
  });
});

//Update details of product with given Product Id
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

module.exports = router;
