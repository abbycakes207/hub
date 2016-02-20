// server

var express = require("express");
var path = require("path");
var port = 3005;
var app = express();
var bodyParser = require("body-parser");

require("node-jsx").install({
    extension: ".jsx"
});

// static files
app.use(express.static(path.join(__dirname, "dist")));

// views
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

// routes
require("./app/routes")(app);

app.get("*", function (req, res) {
    res.json({
        route: "Not found!"
    });
});

app.listen(port);
console.log("listening on port: " + port);
