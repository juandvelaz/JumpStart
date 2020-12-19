const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

// logging middleware
app.use(morgan('dev'));

// body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// static middleware
app.use(express.static(path.join(__dirname, '../public')));

// routes
app.use('/api', require('./api'));

// send index.html as default
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error');
});

// server port
const PORT = process.env.PORT || 5000; // Heroku compatible
app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}`);
});
