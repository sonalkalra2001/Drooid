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
    console.log('Connection has been established successfully.');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 });
 
const GoogleData = sequelize.define("google_database", {
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },

    userName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    secretKey: {
      type: DataTypes.STRING,
    }
 });

 sequelize.sync().then(() => {
    console.log('GoogleData table created successfully!');
 }).catch((error) => {
    console.error('Unable to create table : ', error);
 });