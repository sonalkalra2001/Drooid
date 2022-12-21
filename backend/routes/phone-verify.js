const router = require('express').Router();
var otpGenerator = require('otp-generator');
var AWS = require('aws-sdk');
const crypto = require('crypto');
const {encode,decode} = require("../middlewares/crypt")
require("dotenv").config();
const message = require('../templates/phone_verification');
const  temp=require('./temp')
const key = temp.key


const {OTPData}=require("../database_handle/OTP");

// generate 16 bytes of random data
const initVector =temp.initVector;

algorithm = 'aes-256-ctr',
password = 'd6F3Efeq';
// To add minutes to the current time
function AddMinutesToDate(date, minutes) {
  return new Date(date.getTime() + minutes*60000);
}
function encrypt(text){
  var cipher = crypto.createCipher(algorithm,password)
  var crypted = cipher.update(text,'utf8','hex')
  crypted += cipher.final('hex');
  return crypted;
}
const CryptoJS = require('crypto-js');

const encryptWithAES = (text) => {
  const passphrase = '123';
  return CryptoJS.AES.encrypt(text, passphrase).toString();
};
router.get('/',async function (req, res) {
  try {
    const {phone_number} = req.body;
    console.log(phone_number);

    let phone_message;

    if (!phone_number) {
      const response = {
        Status: 'Failure',
        Details: 'Phone Number not provided',
      };
      return res.status(400).send(response);
    }

    //Generate OTP
    const otp = otpGenerator.generate(6, {
        digits:true,

      lowerCaseAlphabets: false,
      upperCaseAlphabets: false,
      specialChars: false,
    });
    console.log("OTP---->", otp);

     //5 Minutes in miliseconds
    
   //timestamp to 5 minutes in the future
    
    console.log("Dateeeeee---------------->>>>>", Date.now());
    const now=new Date();
    const ttl      = 5 * 60 * 1000; //5
    const expiration_time = Date.now()+ttl;
    
    
    console.log("EXPIRAT--------------------------------------------->",expiration_time);

    
    
    // const hash     = crypto.createHmac("sha256",key).update(data).digest("hex"); 
    // creating SHA256 hash of the data
    // console.log('fullll hash ---->',hash);
    console.log('fullll hash ---->',expiration_time);
    const primary=await OTPData.create({
      
        OTP: otp,
      expire: expiration_time,
      

      
    });
    const data     = `${phone_number}.${primary.id.toString()}.${expiration_time}`; // phone.otp.expiry_timestamp

    console.log("INIT-----------------------------~~~~~~~~~~~~~~~~~", initVector);
    console.log("KEY-----------------------------~~~~~~~~~~~~~~~~~", key);

    
    let hash = encryptWithAES(data);

    console.log(hash);

  // }).then(([user, created]) => {
  //     console.log("USSEERR------------>>>>>>",user);
      
  // }).catch((error) => {
  //     console.error('Failed to create a new record : ', error);
  // });
    phone_message = message(otp);


    

    // Settings Params for SMS
    var params = {
      Message: phone_message,
      PhoneNumber: phone_number,
    };

    AWS.config.update({
      accessKeyId: process.env.AWS_ACCESSKEY,
      secretAccessKey: process.env.AWS_SECRETKEY,
      region: process.env.AWS_REGION,
    });

    var publishTextPromise = new AWS.SNS({apiVersion: '2010-03-31'})
      .publish(params)
      .promise();

    //Send response back to the client if the message is sent
    publishTextPromise
      .then(function (data) {


        return res.send(`${hash}`);
      })
      .catch(function (err) {
        return res.status(400).send({Status: 'Failure', Details: err});
      });
  } catch (err) {
    const response = {Status: 'Failure', Details: err.message};
    return res.status(400).send(response);
  }
});
// console.log("FULL HASH----------->", fullHash);
module.exports.key=key;
module.exports.initVector=initVector;

module.exports = router;
// module.exports.hash=fullHash;

