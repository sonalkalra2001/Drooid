const router = require('express').Router();
const passport = require('passport');

router.get('/', (req, res) => {
    console.log('Failure');
  
    res.send('Failed testing wth google');
  });
  module.exports=router;
