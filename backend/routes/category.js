const router = require("express").Router();
const mysqlConnection = require("../connection");

//Get All categories
router.route("/").get((req, res) => {
  mysqlConnection.query("SELECT * FROM category", function(
    err,
    result,
    fields
  ) {
    if (err) throw err;
    res.json(result);
  });
});

//Add a category
router.post("/addcategory", (req, res) => {
  var data = {
    category_id: req.body.category_id,
    category_name: req.body.category_name
  };

  mysqlConnection.query("INSERT INTO category SET ?", data, (err, result) => {
    if (err) throw err;
    res.json("1 category Inserted!");
  });
});

//Get A Category Details with given category Id
router.route("/:id").get((req, res) => {
  var categoryId = req.params.id;
  mysqlConnection.query(
    "SELECT * FROM category WHERE category_id =" + categoryId,
    (err, result, fields) => {
      if (err) throw err;
      res.json(result);
    }
  );
});





module.exports = router;
