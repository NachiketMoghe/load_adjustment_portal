var mongoose = require('mongoose');
var passportLocalMongoose = require("passport-local-mongoose");
var userSchema = new mongoose.Schema({
    firstname : String,
    lastname : String,
    email : String,
    username: String,
    branch: String,
    ecode: String,

    password: String
});

userSchema.plugin(passportLocalMongoose);
module.exports= mongoose.model("User", userSchema);