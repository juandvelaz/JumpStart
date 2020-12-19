const router = require('express').Router();

// routes

// route error handling middleware
router.use((req, res, next) => {
  const error = new Error('Not found.');
  error.status = 404;
  next(error);
});

module.exports = router;
