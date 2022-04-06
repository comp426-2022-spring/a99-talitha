var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

var User = require("./models/user");

module.exports = function(){
    //Turn user object into an id
    passport.serializeUser(function(user, done){
        //Serialize user
        done(null, user._id);
    });
    passport.deserializeUser(function(id, done){
        User.findById(id, function(err, user){
            done(err, user);
        });
    });

    passport.use("login", new LocalStrategy({
        usernameField:'email',
        passwordField:'password'
    },function(email, password, done){
        User.findOne({email:email}, function(err, user){
            if(err){ return done(err);}
        if(!user){
            return done(null, false, {message: "No user has this email"});
        }
        user.checkPassword(password, function(err, isMatch){
            if(err){return done(err);}
            if (isMatch){
                return done(null, user);
            } else{
                return done(null, false, {message: "Invalid Password"});
            }
        });
    });
        
    }));
}