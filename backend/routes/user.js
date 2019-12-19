const router = require("express").Router();
const mysqlConnection = require("../connection");

//Show All Users
router.route("/users123").get((req, res) => {
  mysqlConnection.query("SELECT * FROM product", function(err, result, fields) {
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
  // var para=req.params.id;
  var para = req.body.email;

  console.log(para);
  var data = {
    user_id: req.body.user_id,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    address: req.body.address,
    contact_number: req.body.contact_number
  };
  var sql = "INSERT INTO user SET ?";
  mysqlConnection.query(sql, data, (err, result) => {
    if (err) throw err;
    res.json("1 Row Inserted!");
  });
  console.log(req.body.name);
});

module.exports = router;
