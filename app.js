var express = require("express");
var bodyParser = require("body-parser");
var exprhbs = require("express-handlebars")
var path = require("path");
var app = express();
var PORT = process.env.PORT || 3000;

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
// var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

// // Set mongoose to leverage built in JavaScript ES6 Promises
// // Connect to the Mongo DB
// mongoose.Promise = Promise;
// mongoose.connect(MONGODB_URI, {
//     useMongoClient: true
// });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine("handlebars", exprhbs({defaultLayout:"main"}));
app.set("view engine", "handlebars");

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"))
})

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});