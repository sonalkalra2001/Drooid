const router = require('express').Router();
const passport = require('passport');

router.get(
  '/callback',
  passport.authenticate('google', {
    successRedirect: '/redirect',
    failureRedirect: '/failure',
  }),
);
router.get('/', passport.authenticate('google', {scope: ['profile', 'email']}));

module.exports = router;
