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
  var sku = req.body.sku;
  var sql = "SELECT remaining_quantity FROM product_varient WHERE sku = ?";
  mysqlConnection.query(sql, sku, (err, results) => {
    var rem_qty = results[0].remaining_quantity;

    if (req.session.loggedUser) {
      if (rem_qty > 0) {
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
          msg: "Remaining quantity is ZERO!!!"
        });
      }
    } else {
      res.json({
        msg: "Login First!!!"
      });
    }
  });
});
module.exports = router;
