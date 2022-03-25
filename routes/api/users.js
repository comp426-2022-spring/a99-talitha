var express = require("express");

var router = express.Router();

router.get("/", function(req, res) {
    res.json("This is the json status code for the users api");
});

module.exports = router;