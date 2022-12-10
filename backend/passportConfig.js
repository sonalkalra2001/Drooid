require("dotenv").config();
 const facebook = {
  clientID: process.env.FACEBOOK_APP_ID,
  clientSecret: process.env.FACEBOOK_APP_SECRET,
  //todo: based on env, change url to localhost, dev or prod
  callbackURL: "http://127.0.0.1:5000/user/login/facebook/callback",
  enableProof: true, //to enable secret proof
  profileFields: ['id', 'emails', 'name'] //scope of fields
};
 const google = {
  clientID: process.env.GOOGLE_APP_ID,
  clientSecret: process.env.GOOGLE_APP_SECRET,
  //todo: based on env, change url to localhost, dev or prod
  callbackURL: "http://127.0.0.1:5000/user/login/google/callback",
  passReqToCallback: true,
  
};
module.exports={facebook, google};
