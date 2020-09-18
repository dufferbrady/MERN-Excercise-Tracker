const express = require("express");
const router = express.Router();

const { registerUser } = require("../controllers/users");

//Show the user login page
router.route("/login").get((req, res) => res.send("Login Page"));

//Show the register page
router.route("/register").get((req, res) => res.send("Register new user page"));

//Post and authenticate new users info to DB
router.post("/register", registerUser);

module.exports = router;