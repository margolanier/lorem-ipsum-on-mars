var express = require("express");
var hbs = require("express-handlebars");

var app = express();

app.set("view engine", "hbs");

app.engine(".hbs", hbs({
  extname: ".hbs",
  partialsDir: "views/",
  layoutsDir: "views/",
  defaultLayout: "layout-main"
}));

app.use("/assets", express.static("public"))

app.get("/", function(req, res){
  res.render("app-welcome");
});

app.set("port", process.env.PORT || 3001);

app.listen(app.get("port"), function(){
  console.log("It's aliiive!");
});
