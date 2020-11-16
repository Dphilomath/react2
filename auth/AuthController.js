require("dotenv").config();
const express = require("express"),
  router = express.Router(),
  bodyParser = require("body-parser"),
  jwt = require("jsonwebtoken"),
  bcrypt = require("bcryptjs"),
  mongoose = require("mongoose"),
  VerifyToken = require("./VerifyToken");

router.use(bodyParser.urlencoded({ extended: false }));

const  User = require("../models/users");
const verifyToken = require("./VerifyToken");
const secret = process.env.secret;



router.post("/register", async (req, res) => {
  // console.log(req.body);
  var hashedPass = bcrypt.hashSync(req.body.password, 8);
  User.create(
    {
      name: req.body.name,
      email: req.body.email,
      password: hashedPass,
    },
    function(err, user){
      if (err) {
        console.log(err);
        return res.json({user:null});
        // return res.status(502).send("Problem Registering the user");
      } else {
        // console.log(user)
        var token = jwt.sign({ id: user._id }, 'supersecret', {
          expiresIn: '5h',
        });
        res.cookie("authorization", token, {
          maxAge: 24 * 60 * 60 * 1000,
          httpOnly: false,
        });
        res.send(user)
      }

    }
  );
});

router.get("/me", VerifyToken, function (req, res, next) {
  User.findById(req.userID, { password: 0 }, function (err, user) {
    if (err)
      return res.status(500).send("There was a problem finding the user.");
    if (!user) return res.status(404).send("No user found.");
    res.status(200).send(user);
  });
});

router.post("/login", function (req, res) {
  
  User.findOne({ email: req.body.email }, function (err, user) {
    if (err) {
      console.log(err)
      return res.status(500).send("Error on the server.");
    }
    if (!user) {
      console.log("user not found")
      return res.status(404).send("No user found.");
    }

    var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
    if (!passwordIsValid)
      return res.status(401).send({ auth: false, token: null });

    var token = jwt.sign({ id: user._id },"supersecret", {
      expiresIn: 86400, // expires in 24 hours
    });
    // console.log(token)
    res.cookie("authorization", token, {
      maxAge: 24 * 60 * 60 * 1000,
      httpOnly: false,
    });
    res.send("you are welcome");
  });
});

router.get("/logout", function (req, res) {
  res.clearCookie("authorization")
  res.status(200).send("Successfully logged out")
});

router.get("/check",verifyToken, (req, res) =>{
  if(req.userId){
    res.status(200).send("User is logged in")
  }
  else res.status(401).send("unauthorized")
})

module.exports = router;
