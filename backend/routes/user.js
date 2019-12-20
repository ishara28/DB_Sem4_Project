const router = require("express").Router();
const mysqlConnection = require("../connection");

//Show All Users
router.route("/users123").get((req, res) => {
  const sql = "SELECT * FROM product";
  mysqlConnection.query(sql, function(err, result) {
    if (err) throw err;
    res.json(result);
  });
});

//Get specific user
// router.route("/:user_id").get((req, res) => {
//   var category_name = req.params.category;
//   var sql =
//     "SELECT * FROM product natural join category where category_name=? ";

//   mysqlConnection.query(
//     sql,
//     category_name,

//     (err, result, fields) => {
//       if (err) throw err;
//       res.json(result);
//     }
//   );
// });

//Add a User
router.route("/").post((req, res) => {

  var data = {
    user_id: req.body.user_id,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    address: req.body.address,
    contact_number: req.body.contact_number
  };

  const sql1 = "SELECT * from  user where user_id=?";
  mysqlConnection.query(sql1, data.user_id, (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      res.json("Enter unique user name");

      // console.log(req.body.name)
    } else {
      var sql2 = "INSERT INTO user SET ?";
      mysqlConnection.query(sql2, data, (err, result) => {
        if (err) throw err;
        else {
          res.json("1 Row Inserted");
        }
      });
    }
  });
});

module.exports = router;
