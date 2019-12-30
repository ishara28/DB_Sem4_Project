const router = require("express").Router();

// Session variables
router.route("/").get((req, res) => {
  res.json(req.session);
});

router.route("/test").get((req, res) => {
  let date_ob = new Date(Date.now()).toLocaleString();
  res.json(date_ob);
});

module.exports = router;
