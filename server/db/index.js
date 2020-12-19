const Sequelize = require('sequelize');
const Test = require('./models/test');

// Database
const DATABASE = '';
const db = new Sequelize(
  process.env.DATABASE_URL || `postgres://localhost:5432:${DATABASE}`, // Heroku compatible
  {
    logging: false,
  }
);

// Model Associations

module.exports = { db, Test };
