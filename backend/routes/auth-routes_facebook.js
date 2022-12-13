const router = require('express').Router();
const passport = require('passport');

router.get(
  '/callback',
  passport.authenticate('facebook', {
    successRedirect: '/redirect',
    failureRedirect: '/failure',
  }),
);
router.get('/', passport.authenticate('facebook', {scope: [ 'email']}));

module.exports = router;
