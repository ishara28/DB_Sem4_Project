const router = require("express").Router();
const mysqlConnection = require("../connection");

//Get all my orders
router.route("/myorders").get((req, res) => {
  var user_id = req.session.loggedUser[0].user_id;
  var sql = "SELECT * FROM orders WHERE user_id ?";
  mysqlConnection.query(sql, user_id, category, (err, result, fields) => {
    if (err) throw err;
    res.json(result);
  });
});

//Get all past orders
router.route("/pastorders").get((req, res) => {
  var user_id = req.session.loggedUser[0].user_id;
  var sql = "SELECT * FROM orders WHERE status = 'delivered '";
  mysqlConnection.query(sql, category, (err, result, fields) => {
    if (err) throw err;
    res.json(result);
  });
});

//Get all pending orders
router.route("/pendingorders").get((req, res) => {
  var user_id = req.session.loggedUser[0].user_id;
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
        res.json({
          msg: "Order Item Added!"
        });
      }
    );
  } else {
    res.json({ msg: "Please Log into add items" });
  }
});

//make order
router.route("/makeorder").post((req, res) => {
  let date_ob = new Date()
    .toISOString()
    .replace(/T/, " ")
    .replace(/\..+/, "");
  if (req.session.loggedUser && req.session.orderId) {
    var orderDetails = {
      order_id: req.session.orderId,
      user_id: req.session.loggedUser[0].user_id,
      payment_method: req.body.payment_method,
      delivery_method: req.body.delivery_method,
      order_date_time: date_ob,
      address: req.body.address,
      status: "not_delivered"
    };

    mysqlConnection.query(
      "INSERT INTO orders SET ?",
      orderDetails,
      (err, result) => {
        if (err) throw err;
        req.session.orderId = null;
        res.json({
          msg: "Order Added to Deliver!"
        });
      }
    );
  } else {
    res.json({
      msg: "Log in to place order or add items to order!"
    });
  }
});

module.exports = router;
