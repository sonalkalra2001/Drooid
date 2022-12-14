const router = require('express').Router();
const passport = require('passport');
var mysql= require('mysql');
const { Sequelize} = require("sequelize");
require('dotenv').config();
const {GoogleData}=require("../database_handle/GoogleData.controller");

const sequelize = new Sequelize(
 'logindata',
 process.env.USERNAME,
 process.env.PASSWORD,
  {
    host: process.env.HOST,
    dialect: 'mysql'
  }
);


var con = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
  database:"logindata",
  port:3306

});


router.get('/', (req, res) => {
  
  let data=[];
  data.push((req.user.emails)[0].value);
  data.push(req.user.displayName);
  data.push(req.user.id);
  console.log("userdata----------->", (data));
  GoogleData.findOrCreate({
    where:{
      email: data[0],
    userName: data[1],
    secretKey: data[2],
    }
    
}).then(([user, created]) => {
    console.log(user, created);
    
}).catch((error) => {
    console.error('Failed to create a new record : ', error);
});
  // con.connect(function(err) {
  //   if (err) throw err;
  //   console.log("Connected!");
  //   var sql = `INSERT INTO LoginData (email, username, secretkey) SELECT * from (select "${data[0]}","${data[1]}","${data[2]}"  ) as temp WHERE not exists(select secretkey from LoginData where secretKey="${data[2]}")`;
    

  //   con.query(sql,function (err, result) {
  //     if (err) throw err;
  //     console.log("1 record inserted");
  //   });
  // });
  res.send("Testing is successfullllllyyyy donee");
  




    
  });
module.exports=router;
