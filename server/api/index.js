const router = require('express').Router();

// Routes
router.use('/test', require('./routes/test'));

// Route error handling middleware
router.use((req, res, next) => {
  const error = new Error('404 - Not Found');
  error.status = 404;
  next(error);
});

module.exports = router;
