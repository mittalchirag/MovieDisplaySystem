var express = require("express");
var morgan = require("morgan");
var bodyParser = require("body-parser");
var app = express();
var path = require("path");

app.use(morgan("dev"));
app.use(bodyParser.json()); // for parsing application/json

app.use(
  bodyParser.urlencoded({
    extended: true
  })
); // for parsing application/x-www-form-urlencoded

app.use(express.static(__dirname + "/app")); // GET /front-end

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname + '/app/index.html')); //index.html serve
});

app.listen(3000, function () {
    console.log('Listening on port 3000');
});

module.exports = app;