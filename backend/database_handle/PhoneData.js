const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
    'logindata',
    process.env.USERNAME,
    process.env.PASSWORD,
     {
       host: process.env.HOST,
       dialect: 'mysql'
     }
   );
   sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.------------------------------');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 });
 
const PhoneData = sequelize.define("phone_database", {


    phone: {
      type: DataTypes.STRING,
      allowNull: false
    },

 });

 sequelize.sync().then(() => {
    console.log('pHONE table created successfully!');


 }).catch((error) => {
    console.error('Unable to create table : ', error);
 });
module.exports={PhoneData};


