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

const app = express();
app.enable('trust proxy');

app.use(cors({origin: true, credentials: true}));
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





const server = app.listen(5000, () => {
  console.log(`Listening at http://127.0.0.1:5000`);

});
