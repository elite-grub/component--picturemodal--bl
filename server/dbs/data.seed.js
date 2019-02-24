const { User } = require('../orm_schema.js');

// if the table exist it will replace if not write more
module.exports = {
  UserMod: User.sync({ force: true })
    .then(() => {
      User.create({
        firstName: 'brian',
        lastName: 'Yayers',
      });
    }),
};
