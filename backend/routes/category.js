const router = require("express").Router();
const mysqlConnection = require("../connection");

//Get All main categories
router.route("/").get((req, res) => {
  mysqlConnection.query(
    "SELECT category_name FROM category WHERE category_id NOT IN (SELECT subcategory_id FROM category_subcategory)",
    function(err, result, fields) {
      if (err) throw err;
      res.json(result);
    }
  );
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

//Get Subcategories   with given category Id
router.route("/subcategories/:id").get((req, res) => {
  var categoryId = req.params.id;
  var sql =
    "SELECT category.category_name FROM category INNER JOIN  (SELECT subcategory_id FROM category_subcategory NATURAL JOIN category WHERE category_id = ?) AS T1 ON category.category_id=T1.subcategory_id";
  mysqlConnection.query(sql, categoryId, (err, result, fields) => {
    if (err) throw err;
    res.json(result);
  });
});

module.exports = router;
