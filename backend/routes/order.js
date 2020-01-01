const router = require("express").Router();
const mysqlConnection = require("../connection");
const uuidv4 = require("uuid/v4");

//Get all my orders
router.route("/myorders").get((req, res) => {
  if (req.session.loggedUser) {
    var user_id = req.session.loggedUser[0].user_id;
    var sql = "SELECT * FROM orders WHERE user_id = ?";
    mysqlConnection.query(sql, user_id, (err, result, fields) => {
      if (err) throw err;
      res.json(result);
    });
  } else {
    res.json({ msg: "Login First!" });
  }
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
  if (req.session.cart_id) {
    var orderItem = {
      sku: req.body.sku,
      cart_id: req.session.cart_id,
      quantity: req.body.quantity
    };
  } else {
    request.session.cart_id = uuidv4();
    var orderItem = {
      sku: req.body.sku,
      cart_id: req.session.cart_id,
      quantity: req.body.quantity
    };
  }

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
  if (req.session.loggedUser) {
    var orderDetails = {
      order_id: uuidv4(),
      cart_id: req.session.cart_id,
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
        req.session.cart_id = null;
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
