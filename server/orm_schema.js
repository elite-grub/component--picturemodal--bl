const Sequelize = require('sequelize');
const { sequelize } = require('./dbs/index.js');

module.exports = {
  User: sequelize.define('users', {
    firstName: {
      type: Sequelize.STRING,
    },
    lastName: {
      type: Sequelize.STRING,
    },
  }, { timestamps: false }, { freezeTable: true }),
};
