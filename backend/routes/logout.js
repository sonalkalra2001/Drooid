const router = require('express').Router();
const passport = require('passport');

router.get('/', function (req, res) {

    req.logout();

    console.log('here');
    res.send("Logging you out!!!!");
    
  });



module.exports=router;
