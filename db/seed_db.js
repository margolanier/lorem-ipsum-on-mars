var mongoose = require("./connection.js");
var seeds = require("./seeds.json");

var Lyrics = mongoose.model("Lyrics");

console.log("I am seeding the database for you...");

Lyrics.remove({}).then(function(){
  Lyrics.collection.insert(seeds).then(function(){
    process.exit();
  })
})
