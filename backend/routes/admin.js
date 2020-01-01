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
  // var dateData = {
  //   start_date: req.body.start_date ,
  //   end_date: req.body.end_date
  // };
  var start_date = req.body.start_date + " 00:00:00";
  var end_date = req.body.end_date + " 00:00:00";
  const sql =
    "SELECT product_category_view.category_name,cart_item.sku,sum(cart_item.quantity) FROM `orders` natural join cart_item NATURAL join product_category_view where orders.order_date_time>= ? AND orders.order_date_time<= ? GROUP BY cart_item.sku ORDER BY sum(cart_item.quantity) DESC limit 1";
  mysqlConnection.query(sql, [start_date, end_date], function(err, result) {
    if (err) throw err;
    res.json(result);
  });
});

//Product category with most orders
router.route("/report3").get((req, res) => {
  const sql = "SELECT category_name from product_category WHERE product_id=(SELECT product_id FROM most_order_category)";
  mysqlConnection.query(sql, function(err, result) {
    if (err) throw err;
    res.json(result);
  });
});

//Given a product, time period with most interest to it
router.route("/report4").get((req, res) => {
  var productName = req.body.productName;
  const sql =
    "SELECT date(orders.order_date_time),cart_item.quantity FROM `product` NATURAL JOIN product_varient NATURAL JOIN cart_item NATURAL JOIN orders WHERE product.title= ? ORDER BY cart_item.quantity DESC limit 1";
  mysqlConnection.query(sql, productName, function(err, result) {
    if (err) throw err;
    res.json(result);
  });
});

//Customer - order report

router.route("/report5").get((req, res) => {
  const sql =
    "SELECT title, category_name, quantity, total_price, payment_method, delivery_method, order_date_time,remaining_days FROM orders NATURAL JOIN cart NATURAL JOIN cart_item NATURAL JOIN product_details NATURAL JOIN delivery where user_id='asanka95'";
  mysqlConnection.query(sql, function(err, result) {
    if (err) throw err;
    console.log("resv");
    res.send(result);
    console.log(result);
  });
});

module.exports = router;
