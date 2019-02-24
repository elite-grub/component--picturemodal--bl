const { User } = require('../orm_schema.js');
const { UserMod } = require('../dbs/data.seed.js');

module.exports = {
  get: (async () => {
    try {
      await UserMod;
      return await User.find();
    } catch (err) {
      return err;
    }
  }),
  // SAME THING AS ABOVE JUST NOT IN ASYC FORMAT (FOR REFERENCE)
  // get: (() => {
  //   return UserMod
  //     .then(() => User.find())
  //     .catch(err => err);
  // }),
};
