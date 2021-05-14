// Require User from the models folder
const { User } = require('../models');

// Create an array of objects representing user properties
const userData = [
  {
    name: 'magicalkels',
    password: 'kyleflugen'
  },
  {
    name: 'twanda690',
    password: 'babadook'
  },
  {
    name: 'endowmon',
    password: 'realmuto10'
  },
  {
    name: 'modgethanc',
    password: 'englishlit101'
  },
  {
    name: 'thunderousapplesauce',
    password: 'irishbartender'
  },
];

// Have Sequelize do a "bulk create" of User instances based on the array of objects
const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;