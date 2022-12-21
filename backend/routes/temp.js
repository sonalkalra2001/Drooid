const crypto = require('crypto');
const key = crypto.randomBytes(32);
const initVector =crypto.randomBytes(16);
module.exports.key=key;
module.exports.initVector=initVector;



