var express= require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var passport = require('passport');
var User = require("./models/user");
var LocalStrategy = require('passport-local');
var passportLocalMongoose = require('passport-local-mongoose');
const { request } = require('express');


mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect("mongodb://localhost:27017/load_adjustment_portal");


var app = express();
app.set('view engine', 'ejs');

app.use(require("express-session")({
    secret: "This internship is pretty cool",
    resave: false,
    saveUninitialized: false 
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// ++++++++++
// Routes   +
// ++++++++++

app.get("/", function(req,res){

    res.render('home');
});

app.get("/load_form", isLoggedIn, function(req, res){
    res.render('load_adjust_form');
});

// SIGNUP

app.get("/signup", function(req,res){
    res.render('signup');
});

app.post("/signup", function(req,res){
    req.body.username
    req.body.firstname
    req.body.lastname
    req.body.email
    req.body.password
    User.register(new User({username: req.body.username, firstname: req.body.firstname, lastname: req.body.lastname, email: req.body.email
    }), req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.render("signup");
        }
        passport.authenticate("local")(req, res, function(){
            res.redirect("/load_form");
        });
    });
});

// LOGIN

app.get("/login", function(req,res){
    res.render('login');
});
// Login Logic
// Middleware
app.post("/login", passport.authenticate("local", {
   successRedirect: "/load_form",
   failureRedirect: "/login"
}) ,function(req,res){
});

app.get("/logout", function(req,res){
    req.logout();
    res.redirect("/");
});


function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}


app.listen(process.env.PORT||3000, process.env.ip, function(){
    console.log('Server Activated..');
});

