const router = require("express").Router();
const mysqlConnection = require("../connection");

//Quarterly sales report for a given year

router.route("/report1").get((req, res) => {
  console.log("resv");
  const sql = "SELECT * FROM product";
  mysqlConnection.query(sql, function(err, result) {
    if (err) throw err;
    res.json("report1");
  });
});

// Products with most number of sales in a given period

router.route("/report2").get((req, res) => {
  var date = req.body.date;
  const sql =
    "SELECT product_category_view.category_name,cart_item.sku,sum(cart_item.quantity) FROM `orders` natural join cart_item NATURAL join product_category_view where orders.order_date_time>='2011-12-01 00:00:00' AND orders.order_date_time<='2025-12-01 00:00:00' GROUP BY cart_item.sku ORDER BY sum(cart_item.quantity) DESC limit 1";
  mysqlConnection.query(sql, function(err, result) {
    if (err) throw err;
    res.json("report2");
  });
});

//Product category with most orders
router.route("/report3").get((req, res) => {
  console.log("resv");
  const sql = "SELECT * FROM product";
  mysqlConnection.query(sql, function(err, result) {
    if (err) throw err;
    res.json("report3");
  });
});

//Given a product, time period with most interest to it
router.route("/report4").get((req, res) => {
  console.log("resv");
  const sql = "SELECT * FROM product";
  mysqlConnection.query(sql, function(err, result) {
    if (err) throw err;
    res.json("report4");
  });
});

//Customer - order report

router.route("/report5").get((req, res) => {
  console.log("resv23");
  const sql =
    "SELECT title, category_name, quantity, total_price, payment_method, delivery_method, order_date_time,remaining_days FROM orders NATURAL JOIN cart NATURAL JOIN cart_item NATURAL JOIN product_details NATURAL JOIN delivery where user_id='asanka95'";
  mysqlConnection.query(sql, function(err, result) {
    if (err) throw err;
    res.json(result);
    console.log(result);
  });
});

module.exports = router;
