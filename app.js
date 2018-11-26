var bodyparser  = require("body-parser"),
mongoose        = require("mongoose"),
express         = require("express"),
app             = express();

// App Config

mongoose.connect("mongodb://localhost/restful_blog_app", {useNewUrlParser : true});
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyparser.urlencoded({extended:true}));

// Mongoose model configuration
// Restful Routes

var listener = app.listen(3000, "127.0.0.1", function(){
  var address = listener.address().address;
  var port = listener.address().port;

  console.log("Server running on : " +address+":"+port);
});
