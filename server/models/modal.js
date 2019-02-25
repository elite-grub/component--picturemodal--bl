/* eslint-disable arrow-body-style */
/* eslint-disable no-console */
const Sequelize = require('sequelize');
const { config } = require('../dbs/config.file.js');

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

module.exports = {
  getUser: ((userId) => {
    return sequelize.query(`SELECT * FROM users WHERE id = ${userId}`)
      .then(res => res[0]) // NEED TO INCLUDE [0] TO AVOID UNNESSARY DATA
      .catch(err => err);
  }),
  getResturant: ((resId) => {
    return sequelize.query(`SELECT * FROM resturants WHERE id = ${resId}`)
      .then(res => res[0])
      .catch(err => err);
  }),
};

module.exports.sequelize = sequelize;
