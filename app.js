var express= require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var passport = require('passport');
var LocalStrategy = require('passport-local');
var passportLocalMongoose = require('passport-local-mongoose');
// var fs = require('fs');

// var myCss = {
//          style : fs.readFileSync('./views/style_load.css','utf8')
// };


mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect("mongodb://localhost:27017/load_adjustment_portal");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');




app.get("/", function(req,res){
    // if(err)
    // {res.re}
    res.render('home');
});

app.listen(process.env.PORT||3000, process.env.ip, function(){
    console.log('Server Activated..');
});

app.get("/load_form", function(req, res){
    // if(err){
    //     res.render(err);
    // }
    // else{
        res.render('load_adjust_form');
        
    // }
});

app.get("/login", function(req,res){
    res.render('login');
});


app.get("/signup", function(req,res){
    res.render('signup');
});