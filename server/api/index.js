const router = require('express').Router();

// Routes
router.use('/test', require('./routes/test'));

// Route error handling middleware
router.use((req, res, next) => {
  const error = new Error('Error 404: Page not found');
  error.status = 404;
  next(error);
});

module.exports = router;
