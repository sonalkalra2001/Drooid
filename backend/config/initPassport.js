const  passport =require("passport");
const FacebookStrategy = require("passport-facebook");
const GoogleStrategy =require("passport-google-oauth20");

const { facebook, google } =require('./passportConfig.js') ;
const session = require("express-session");
require("dotenv").config();

const initPassport = (app) => {
  //init's the app session
  app.use(
    session({
      resave: false,
      saveUninitialized: true,
      secret: "cats",
    })
  );
  //init passport
  app.use(passport.initialize());
  app.use(passport.session());
};

////////// FACEBOOK //////////
passport.use(
  new FacebookStrategy.Strategy(
   facebook,
    async (accessToken, refreshToken, profile, done) => {
       console.log(profile);
      //done(err, user) will return the user we got from fb
      done(null, profile);
    }
  )
);

////////// GOOGLE //////////
passport.use(
  new GoogleStrategy(
    google
    ,
    function (request,accessToken, refreshToken, profile, done){
      console.log(profile);
      //done(err, user) will return the user we got from fb
      done(null, profile);
    }
  )
);

////////// Serialize/Deserialize //////////

// Serialize user into the sessions
passport.serializeUser((user, done) => done(null, user));

// Deserialize user from the sessions
passport.deserializeUser((user, done) => done(null, user));

////////// Format data//////////

const formatGoogle = (profile) => {
  return {
    firstName: profile.given_name,
    lastName: profile.family_name,
    email: profile.email
  };
};
const formatFB = (profile) => {
  return {
    firstName: profile.first_name,
    lastName: profile.last_name,
    email: profile.email
  };
};
module.exports={initPassport};
