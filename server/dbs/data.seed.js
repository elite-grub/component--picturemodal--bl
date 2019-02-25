const faker = require('faker');
const { User, Resturant } = require('../orm_schema.js');
const { sequelize } = require('../models/modal.js');

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

const runSeed = (() => {
  for (let i = 0; i <= 1; i += 1) {
    // CHANGE FORCE TO TRUE TO RESET THE DATABASE INPUT LINE 9 AND 21. *** MIGHT CAUSE ERRORS ***
    module.exports = {
      UserMod: User.sync({ force: true })
        .then(() => {
          User.create({
            username: faker.internet.userName(),
            friends_count: faker.random.number({ min: 10, max: 99 }),
            review_count: faker.random.number({ min: 2, max: 50 }),
            pic_count: faker.random.number({ min: 0, max: 10 }),
            elite_status: faker.random.boolean(),
            review: faker.lorem.sentence(),
            review_date: faker.date.recent(),
          });
        }),
      ResturantMod: Resturant.sync({ force: true })
        .then(() => {
          Resturant.create({
            pic_count: faker.random.number({ min: 4, max: 25 }),
          });
        }),
    };
  }
});
runSeed();
