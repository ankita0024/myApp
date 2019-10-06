var express = require('express');
var app = express();
var mongoose = require("mongoose");
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/myDB",{useNewUrlParser: true });
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
 db.once("open", ()=> {
     console.log("Connection succeeded.");
});
var detailSchema = new mongoose.Schema({
    name: String,
    address: String,
    latitude:String,
    longitude:String,
    locality:String,
    average_cost_for_two : Number
});
var User = mongoose.model("Restros", detailSchema);

app.get("/", (req, res) => {
    res.send("Test Success");
   });

app.post("/save", (req, res) => {
    console.log(req)
    var myData = new Restros(req.body);
    console.log(myData)
    myData.save()
        .then(item => {
            res.send("Name saved to my DB");
        })
        .catch(err => {
            res.status(400).send("Unable to save to database");
        });
});
  
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});