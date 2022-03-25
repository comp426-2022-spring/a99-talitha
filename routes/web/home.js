// allows navigation between subpages
var express = require("express");

var router = express.Router();

router.get("/", function(req,res) {
    res.render("home/index");
});

router.get("/home", function(req,res) {
    res.render("home/home");
});

router.get("/about", function(req,res) {
    res.render("home/about");
});

module.exports = router;