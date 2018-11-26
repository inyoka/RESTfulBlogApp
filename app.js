var bodyparser  = require("body-parser"),
mongoose        = require("mongoose"),
express         = require("express"),
app             = express();

mongoose.connect("mongodb://localhost/restful_blog_app", {useNewUrlParser : true});

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyparser.urlencoded({extended:true}));
