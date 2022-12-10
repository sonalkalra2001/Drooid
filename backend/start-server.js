const express = require('express');
const session =require('express-session');
const app = express();
const cors =require('cors');
app.use(cors({origin: true, credentials: true}));


require("dotenv").config();
const {initPassport}= require('./initPassport.js');

// Launch the server on the port 5000

const passport =  require('passport');


initPassport(app);
// app.use(session({secret: 'cats', resave: false, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());
app.use(session({ secret: 'cats', resave: false, saveUninitialized: true }));

app.get(
  '/user/login/google',
  passport.authenticate('google', {scope: ['profile', 'email']})
  
); //define this scope to have access to the email
app.get(
  '/user/login/google/callback',
  passport.authenticate('google', {
    successRedirect: '/success',
    failureRedirect: '/auth/google',
  }),
  // Redirect user back to the mobile app using deep linking
);


app.get('/success', (req, res) => {
  console.log('Succcess');

  res.send('Succccccccccccccccccccccccccccccccccccccesssssssssssssssssssss');
});
app.get('/auth/google', (req, res) => {
  console.log('Failure');

  res.send('Failed testing wth google');
});


// app.get(
//   '/user/login/facebook',
//   passport.authenticate('facebook', {scope: ['email']}),
// ); //define the scope to also access the email

// app.get(
//   '/user/login/facebook/callback',
//   passport.authenticate('facebook', {failureRedirect: '/auth/facebook'}),
//   // Redirect user back to the mobile app using deep linking
//   (req, res) => {
//     console.log('Facebook testing');
//   },
// );


app.get('/logout', function (req, res) {
  console.log('here');
});

const server = app.listen(5000, () => {
  console.log(`Listening at http://127.0.0.1:5000`);
});
