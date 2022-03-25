// main application file 
var express = require("express");
var path = require("path");

var app = express();

app.set("port", process.env.PORT || 3000);

//tells express where the views are 
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", require("./routes/web"));
app.use("/api", require("./routes/api"));

app.listen(app.get("port"),function(){
    console.log("Sever started on port " + app.get("port"));
});