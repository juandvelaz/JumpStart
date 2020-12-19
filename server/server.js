const express = require('express');
const morgan = require('morgan');
const path = require('path');

const { db } = require('./db');
const app = express();

// Logging middleware
app.use(morgan('dev'));

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static middleware
app.use(express.static(path.join(__dirname, '../public')));

// Routes
app.use('/api', require('./api'));

// Send index.html as default
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error');
});

// Server port
const PORT = process.env.PORT || 5000; // Heroku compatible

// Server
const startServer = async () => {
  try {
    await db.sync();
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
};
startServer();
