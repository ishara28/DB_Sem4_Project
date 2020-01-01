const router = require("express").Router();
const mysqlConnection = require("../connection");
const uuidv4 = require("uuid/v4");

// Session variables
router.route("/").get((req, res) => {
  res.json(req.session);
});

router.route("/time").get((req, res) => {
  let date_ob = new Date()
    .toISOString()
    .replace(/T/, " ")
    .replace(/\..+/, "");
  res.json(date_ob);
});

//////////////////////////////////////////////

router.route("/test").post((req, res) => {
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
