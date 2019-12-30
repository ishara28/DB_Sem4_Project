const router = require("express").Router();
const mysqlConnection = require("../connection");

//Get all my orders
router.route("/myorders").get((req, res) => {
  var sql = "SELECT * FROM orders";
  mysqlConnection.query(sql, category, (err, result, fields) => {
    if (err) throw err;
    res.json(result);
  });
});

//Get all past orders
router.route("/pastorders").get((req, res) => {
  var sql = "SELECT * FROM orders WHERE status = 'delivered '";
  mysqlConnection.query(sql, category, (err, result, fields) => {
    if (err) throw err;
    res.json(result);
  });
});

//Get all pending orders
router.route("/pendingorders").get((req, res) => {
  var sql = "SELECT * FROM orders WHERE status = 'not_delivered '";
  mysqlConnection.query(sql, category, (err, result, fields) => {
    if (err) throw err;
    res.json(result);
  });
});

//Add items to an order
router.route("/additems").post((req, res) => {
  var orderItem = {
    sku: req.body.sku,
    order_id: req.body.order_id,
    quantity: req.body.quantity
  };

  if (req.session.loggedUser) {
    mysqlConnection.query(
      "INSERT INTO order_item SET ?",
      orderItem,
      (err, result) => {
        if (err) throw err;
        req.session.orderId = orderItem.order_id;
      }
    );
  } else {
    res.json({ msg: "Please Log into add items" });
    res.send({ msg: "Please Log into add items" });
  }
});

//make order
router.route("/makeorder").get((req, res) => {
  res.json(req.session.orderId);
});

module.exports = router;
