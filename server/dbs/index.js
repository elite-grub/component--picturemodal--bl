/* eslint-disable no-console */
const Sequelize = require('sequelize');
const { config } = require('./config.file');

const sequelize = new Sequelize({
  database: 'picturemodal',
  username: config.username,
  password: config.password,
  dialect: 'postgres',
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

module.exports.sequelize = sequelize;
