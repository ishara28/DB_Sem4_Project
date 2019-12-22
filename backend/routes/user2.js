const mysqlConnection = require("../connection");
const router = require("express").Router();
var session = require("express-session");

router.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true
  })
);

//Register user
router.route("/register").post((req, res) => {
  var data = {
    user_id: req.body.user_id,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    address: req.body.address,
    contact_number: req.body.contact_number,
    password: req.body.password
  };

  var password2 = req.body.password2;

  const sql1 = "SELECT * from  user where email =? ";
  mysqlConnection.query(sql1, data.email, (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      res.json("Enter unique email");
    } else if (data.password == password2) {
      var sql2 = "INSERT INTO user SET ?";
      mysqlConnection.query(sql2, data, (err, result) => {
        if (err) throw err;
        else {
          res.json("User Registered!");
        }
      });
    } else {
      res.json("Password Mismatch!");
    }
  });
});

//Log user
router.post("/log", (request, response) => {
  var email = request.body.email;
  var password = request.body.password;
  if (email && password) {
    mysqlConnection.query(
      "SELECT * FROM user WHERE email = ? AND password = ?",
      [email, password],
      function(error, results, fields) {
        if (results.length > 0) {
          request.session.loggedin = true;
          request.session.email = email;
          response.send("Succesfully Logged In!");
        } else {
          response.send("Incorrect email and/or Password!");
        }
        response.end();
      }
    );
  } else {
    response.send("Please enter email and Password!");
    response.end();
  }
});

//Get isLogged
router.get("/islogged", (request, response) => {
  response.send({
    isLogged: request.session.loggedin,
    username: request.session.username
  });
});

//Logout
router.get("/logout", (request, response) => {
  request.session.loggedin = false;
  request.session.username = null;
  response.send("You Logged Out!");
});

module.exports = router;
