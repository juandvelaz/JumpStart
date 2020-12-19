const Sequelize = require('sequelize');
const Test = require('./models/test');

// Model Associations

// Database
const DATABASE = '';
const db = new Sequelize(
  process.env.DATABASE_URL || `postgres://localhost:5432/${DATABASE}`, // Heroku compatible
  {
    logging: false,
  }
);

module.exports = { db, Test };
