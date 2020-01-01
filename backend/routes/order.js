const router = require("express").Router();
const mysqlConnection = require("../connection");
const uuidv4 = require("uuid/v4");

//Get all my orders
router.route("/myorders").get((req, res) => {
  if (req.session.loggedUser) {
    var user_id = req.session.loggedUser[0].user_id;
    var sql = "SELECT * FROM orders NATURAL JOIN cart  WHERE user_id = ?";
    mysqlConnection.query(sql, user_id, (err, result) => {
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
  if (req.session.loggedUser) {
    var orderItem = {
      sku: req.body.sku,
      cart_id: req.session.cart_id,
      quantity: req.body.quantity
    };

    mysqlConnection.query(
      "INSERT INTO cart_item SET ?",
      orderItem,
      (err, result) => {
        if (err) throw err;
        res.json({
          msg: "Order Item Added!"
        });
      }
    );
  } else {
    res.json({
      msg: "Log First"
    });
  }
});

//make order
router.route("/makeorder").post((req, res) => {
  //Insert Address
  var address = {
    user_id: req.session.loggedUser[0].user_id,
    lane: req.body.lane,
    city: req.body.city,
    district: req.body.district
  };

  mysqlConnection.query(
    "INSERT INTO user_address SET ?",
    address,
    (err, result) => {
      if (err) throw err;
    }
  );

  //Get total price of the cart to order
  var cart_id = req.session.cart_id;
  var sql1 =
    "SELECT SUM(prices) AS tot_price FROM  price_view WHERE cart_id = ?";

  console.log(cart_id);
  mysqlConnection.query(sql1, cart_id, (err, results) => {
    if (err) throw err;
    req.session.tot_price = results[0].tot_price;
    let date_ob = new Date()
      .toISOString()
      .replace(/T/, " ")
      .replace(/\..+/, "");
    if (req.session.loggedUser) {
      //Insert order details to order table

      var orderDetails = {
        order_id: uuidv4(),
        cart_id: req.session.cart_id,
        payment_method: req.body.payment_method,
        delivery_method: req.body.delivery_method,
        order_date_time: date_ob,
        total_price: req.session.tot_price
      };

      mysqlConnection.query(
        "INSERT INTO orders SET ?",
        orderDetails,
        (err, result) => {
          if (err) throw err;
          req.session.cart_id = null;
          req.session.tot_price = null;
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
});

module.exports = router;
