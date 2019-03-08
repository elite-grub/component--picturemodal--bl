/* eslint-disable no-console */
const faker = require('faker');
const { User, Restaurant } = require('../orm_schema.js');
const { sequelize } = require('../models/modal.js');

const pictures = () => {
  const arr = [];
  const num = faker.random.number({ min: 4, max: 18 });
  for (let j = 1; j <= num; j += 1) {
    arr.push(`https://s3-us-west-1.amazonaws.com/elite-grub/food${j}.jpg`);
  }
  return arr;
};
// CHANGE FORCE TO TRUE TO RESET THE DATABASE. *** MIGHT CAUSE ERRORS ***
sequelize.authenticate()
  .then(() => User.sync({ force: true }))
  .then(() => Restaurant.sync({ force: true }))
  .then(() => {
    const promises = [];
    for (let i = 1; i <= 5; i += 1) {
      promises.push(User.create({
        username: faker.internet.userName(),
        friends_count: faker.random.number({ min: 10, max: 99 }),
        review_count: faker.random.number({ min: 2, max: 50 }),
        pic_count: faker.random.number({ min: 0, max: 10 }),
        elite_status: faker.random.boolean(),
        review: faker.lorem.sentence(),
        review_date: faker.date.recent(),
        user_pic: `https://s3-us-west-1.amazonaws.com/elite-grub/food${i}.jpg`,
      }),
      Restaurant.create({
        url: pictures(),
      }));
    }
    Promise.all(promises)
      .then(() => {
        sequelize.close();
        console.log('You have seeded all your data and the connection has ended');
      });
  })
  .catch(err => console.log(err));
