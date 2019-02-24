const { User, Resturant } = require('../orm_schema.js');
const { UserMod, ResturantMod } = require('../dbs/data.seed.js');

module.exports = {
  getUser: (async () => {
    try {
      await UserMod;
      return await User.find();
    } catch (err) {
      return err;
    }
  }),
  // SAME THING AS ABOVE JUST NOT IN ASYC FORMAT (FOR REFERENCE)
  // getUser: (() => {
  //   return UserMod
  //     .then(() => User.find())
  //     .catch(err => err);
  // }),
  getResturant: (async () => {
    try {
      await ResturantMod;
      return Resturant.find();
    } catch (err) {
      return err;
    }
  }),
};
