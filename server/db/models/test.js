const Sequelize = require('sequelize');
const { db } = require('../index');

// Model
module.exports = db.define('test', {
  testId: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue: 'https://i.redd.it/w3kr4m2fi3111.png',
  },
});
