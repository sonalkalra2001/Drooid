const express = require('express');
const passport = require('passport');
const cors = require('cors');
const cookieSession = require('cookie-session');
require('dotenv').config();
const authRoutes= require("./routes/auth-routes_google");
const successRoute=require("./routes/successful_login");
const failureRoute= require("./routes/failure_login");
const logout=require("./routes/logout");
const fbauth= require("./routes/auth-routes_facebook");
var mysql = require('mysql');
const {initPassport} = require('./config/initPassport.js');
const phoneauthentication=require("./routes/phone-verify");
const otpverify=require("./routes/verification");
require("./database_handle/GoogleData.controller");
require("./database_handle/PhoneData");
require("./database_handle/OTP");
const app = express();
app.enable('trust proxy');
app.use(express.json());;


app.use(cors({origin: true, credentials: true, optionsSuccessStatus: 200,}));
initPassport(app);
app.use('/user/login/google',authRoutes,);
app.use('/redirect',successRoute);
app.use('/failure', failureRoute);

app.use(
  '/user/login/facebook',
  fbauth
); //define the scope to also access the email

// app.get(
//   '/user/login/facebook/callback',
//   passport.authenticate('facebook', {failureRedirect: '/auth/facebook'}),
//   // Redirect user back to the mobile app using deep linking
//   (req, res) => {
//     console.log('Facebook testing');
//   },
// );

app.use('/logout', logout);
// Launch the server on the port 5000

app.use("/phone/otp", phoneauthentication);
app.use("/otp/verify", otpverify);
const server =app.listen(5000,() => {
  console.log('Server listening on port ' + 5000);
});
