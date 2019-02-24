const Sequelize = require('sequelize');
const { sequelize } = require('./dbs/index.js');

module.exports = {
  User: sequelize.define('users', {
    username: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    friends_count: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    review_count: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    pic_count: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    elite_status: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
    review: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    review_date: {
      type: Sequelize.DATEONLY,
      allowNull: false,
    },
  }, { timestamps: false }, { freezeTable: true }),
  Resturant: sequelize.define('resturant', {
    pic_count: {
      type: Sequelize.INTEGER,
    },
  }, { timestamps: false }, { freezeTable: true }),

};
