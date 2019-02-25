const Sequelize = require('sequelize');
const { sequelize } = require('./models/modal.js');

module.exports = {
  User: sequelize.define('users', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
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
      type: Sequelize.STRING(1234),
      allowNull: false,
    },
    review_date: {
      type: Sequelize.DATEONLY,
      allowNull: false,
    },
  }, { timestamps: false }, { freezeTable: true }),
  Restaurant: sequelize.define('restaurants', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    pic_count: {
      type: Sequelize.INTEGER,
    },
    url: {
      type: Sequelize.ARRAY(Sequelize.TEXT),
    },
  }, { timestamps: false }, { freezeTable: true }),

};
