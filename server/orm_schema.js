const Sequelize = require('sequelize');
const { sequelize } = require('./models/modal.js');

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
      type: Sequelize.STRING(1234),
      allowNull: false,
    },
    review_date: {
      type: Sequelize.DATEONLY,
      allowNull: false,
    },
  }, { timestamps: false }, { freezeTable: true }),
  Resturant: sequelize.define('resturants', {
    pic_count: {
      type: Sequelize.INTEGER,
    },
  }, { timestamps: false }, { freezeTable: true }),

};
