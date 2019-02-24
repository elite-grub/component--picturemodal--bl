const { User, Resturant } = require('../orm_schema.js');

// if the table exist it will replace if not write more
module.exports = {
  UserMod: User.sync({ force: true })
    .then(() => {
      User.create({
        username: 'brian',
        friends_count: 3,
        review_count: 5,
        pic_count: 2,
        elite_status: true,
        review: 'Yay this is so cool',
        review_date: '2019-02-24',
      });
    }),
  ResturantMod: Resturant.sync({ force: true })
    .then(() => {
      Resturant.create({
        pic_count: 4,
      });
    }),
};
