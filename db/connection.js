var mongoose = require("mongoose");

if (process.env.NODE_ENV == "production"){
  mongoose.connect(process.env.PROD_MONGODB);
} else {
  mongoose.connect("mongodb://localhost/lyrics");
}

var LyricSchema = new mongoose.Schema(
  {
    lyric: String
  }
);

mongoose.model("Lyrics", LyricSchema);

module.exports = mongoose;
