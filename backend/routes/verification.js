const router = require('express').Router();
const crypto       = require("crypto");
require("dotenv").config();
const { Sequelize} = require("sequelize");
// const key          = process.env.CRYPT_PASSWORD; // Key for cryptograpy. Keep it secret
// const {hash}=require("./phone-verify");
const {PhoneData}=require("../database_handle/PhoneData");
const {OTPData}=require("../database_handle/OTP");
const  temp=require('./temp')
const key = temp.key;
const initVector =temp.initVector;
const algorithm = "aes-256-cbc"; ;
const CryptoJS = require('crypto-js');
const decryptWithAES = (ciphertext) => {
    const passphrase = '123';
    const bytes = CryptoJS.AES.decrypt(ciphertext, passphrase);
    const originalText = bytes.toString(CryptoJS.enc.Utf8);
    return originalText;
  };
router.get('/', async function (req, res) {


    const hash=req.body.hash;
    const decipher = crypto.createDecipheriv(algorithm, key, initVector);

let decryptedData = decryptWithAES(hash);

    
   const [phone, id, expires]=decryptedData.split('.');
   console.log(phone, id, expires);

    // console.log("KEEYY" ,initVector,key);

    const priID=+id;

    const dbdata = await OTPData.findOne({ where: { id:priID } });
    const otp= req.body.otp;

   
   const otp_db=dbdata.OTP;

   console.log("OOOOOOTTTPPPP", otp, hash, expires);

    // Check if expiry time has passed
    let now = Date.now();
    if(now>parseInt(expires)) res.send("Time exceeded");
    // Calculate new hash with the same key and the same algorithm
    // let data  = `${phone}.${+req.body.id}.${expires}`;
    // let newCalculatedHash = crypto.createHmac("sha256",key).update(data).digest("hex");
    // Match the hashes
    if( otp===otp_db){

        PhoneData.findOrCreate({
            where:{
              phone:phone
            }
            
        }).then(([user, created]) => {
            console.log(user, created);
            
        }).catch((error) => {
            console.error('Failed to create a new record : ', error);
        });
        res.send("Hash matchess");
    }
    else res.send("Hash does not match");

    



   
    
  });


module.exports=router;
