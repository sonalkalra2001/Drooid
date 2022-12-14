const { Sequelize} = require("sequelize");
require('dotenv').config();

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
    console.log('Connection has been established successfully.');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 });
 