/* eslint-disable no-console */
const faker = require('faker');
const { User, Restaurant } = require('../orm_schema.js');
const { sequelize } = require('../models/modal.js');

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

const pictures = () => {
  const arr = [];
  const num = faker.random.number({ min: 4, max: 18 });
  for (let j = 1; j <= num; j += 1) {
    arr.push(`https://s3-us-west-1.amazonaws.com/elite-grub/food${j}.jpg`);
  }
  return arr;
};
// CHANGE FORCE TO TRUE TO RESET THE DATABASE. *** MIGHT CAUSE ERRORS ***

User.sync({ force: true })
  .then(() => {
    for (let i = 0; i <= 100; i += 1) {
      User.create({
        username: faker.internet.userName(),
        friends_count: faker.random.number({ min: 10, max: 99 }),
        review_count: faker.random.number({ min: 2, max: 50 }),
        pic_count: faker.random.number({ min: 0, max: 10 }),
        elite_status: faker.random.boolean(),
        review: faker.lorem.sentence(),
        review_date: faker.date.recent(),
      });
    }
  })
  .catch(err => console.log(err));
Restaurant.sync({ force: true })
  .then(() => {
    for (let k = 0; k <= 100; k += 1) {
      Restaurant.create({
        pic_count: pictures().length,
        url: pictures(),
      });
    }
  })
  .catch(err => console.log(err));
