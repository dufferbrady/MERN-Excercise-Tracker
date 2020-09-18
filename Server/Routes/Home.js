const express = require("express");
const router = express.Router();

//If user is logged in they will see their dashboard
router.route("/").get((req, res) => res.send("Dashboard"));

//if user is not registered or not logged in they will be redirected to the welcome page
router.get("/home", (req, res) => res.send("Home"));

module.exports = router;
