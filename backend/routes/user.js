const router = require("express").Router();
const mysqlConnection = require("../connection");

//Show All Users
router.route("/users").get((req, res) => {
  mysqlConnection.query("SELECT * FROM product", function(err, result, fields) {
    if (err) throw err;
    res.json(result);
  });
});

//Get specific user
router.route("/:user_id").get((req, res) => {
  var category_name = req.params.category;
  var sql ="SELECT * FROM product natural join category where category_name=? ";
  
  mysqlConnection.query(
    sql,
    category_name,

    (err, result, fields) => {
      if (err) throw err;
      res.json(result);
    }
  );
});

//Add a User
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






module.exports = router;
