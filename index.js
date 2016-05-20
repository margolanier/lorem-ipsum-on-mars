var express = require("express");
var app = express();
var hbs = require("express-handlebars");
var mongoose = require("mongoose");
var db = require("./db/connection.js");
var Lyrics = mongoose.model("Lyrics");

app.set("view engine", "hbs");

app.engine(".hbs", hbs({
  extname: ".hbs",
  partialsDir: "views/",
  layoutsDir: "views/",
  defaultLayout: "layout-main"
}));

app.use("/assets", express.static("public"))

app.get("/api/lyrics", function(req, res){
  Lyrics.find().then(function(lyrics){
    res.json(lyrics);
  });
});

app.get("/*", function(req, res){
  res.render("app-welcome");
});

app.set("port", process.env.PORT || 3001);

app.listen(app.get("port"), function(){
  console.log("It's aliiive!");
});
