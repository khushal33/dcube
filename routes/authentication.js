const express = require('express');
var passport = require('passport');
var LocalStratergy = require('passport-local').Strategy;
var User = require('../models/user');

var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;
var jwt = require('jsonwebtoken');
// var FacebookTokenStrategy = require('passport-facebook-token');
var config = require('../config');
const user = require('../models/user');





exports.local = passport.use(new LocalStratergy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

exports.getToken = function(user){
    return jwt.sign(user , config.secretKey,{expiresIn:8*60*60*1000});
}

var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = config.secretKey;

exports.jwtPassport = passport.use(new JwtStrategy(opts,function(jwt_payload, done) {
    console.log("jwtPayload:", jwt_payload);
    User.findOne({_id:jwt_payload._id},(err,user)=>{
        if(err){
            return done(err,false);
        }
        else if(user){
            return done(null,user);
        }
        else{
            return done(null,false);
        }
    });
}));


exports.verifyUser = passport.authenticate('jwt' , {session:false});



  
 
// var jwtPass = new JwtStrategy(opts,function(jwt_payload, done) {
//     User.findOne({_id:jwt_payload._id},(err,user)=>{
//         console.log(user.admin);
//         if(err){
//             return done(err,false);
//         }
//         else if(user.admin === true){
//             return done(null,user);
//         }
//         else{
//             return done(null,false);
//         }
//     });
    
// });
  

//verifing admin
exports.verifyAdmin = passport.authenticate(new JwtStrategy(opts,function(jwt_payload, done) {
   
    User.findOne({_id:jwt_payload._id},(err,user)=>{
        //console.log(user.admin);
        if(err){
            return done(err,false);
        }
        else if(user.admin === true){
            return done(null,user);
        }
        else{
            return done(null,false);
        }
    });
    
}));
 

//verifing comments
// exports.verifyComments = (req,res,next)=>{
//     console.log(req.user._id);

//     if(req.user._id == req.params.dishId)
//     Dishes.findOne(req.params.dishId)
//     .then((err,user)=>{
//         if(req.user._id == dish.comments.id(req.params.commentId).author){
//             return next(user);
//         }
//         else{
//             return next(err);
//         }
//     })
// }


// exports.facebookPassport = passport.use(new FacebookTokenStrategy({
//     clientID : config.facebook.clientId,
//     clientSecret:config.facebook.clientSecret
// },(accessToken, refreshToken, profile, done)=>{
//     console.log(profile._json);
//     User.findOne({facebookId : profile.id},(err,user)=>{
//         if(err){
//             return done(err,false);
//         }
//         if(!err && user !== null){
           
//             return done(null,user);
//         }
//         else{
           
//             user = new User({username:profile.displayName});
//             user.facebookId = profile.id;
//             user.firstname = profile.name.givenName;
//             user.lastname = profile.name.familyName;
//            user.email = profile.emails[0].value;
//             user.save((err,user)=>{
//                 if(err)
//                     return done(err,false);
//                 else
//                     return done(null,user);
//             });
//         }
//     });
// }));