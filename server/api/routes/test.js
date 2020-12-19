const router = require('express').Router();

// Matches GET requests
router.get('/', async (req, res, next) => {
  try {
  } catch (error) {
    console.log(error);
    next(error);
  }
});

// Matches POST requests
router.post('/', async (req, res, next) => {
  try {
  } catch (error) {
    console.log(error);
    next(error);
  }
});

// Matches PUT requests
router.put('/testId', async (req, res, next) => {
  try {
  } catch (error) {
    console.log(error);
    next(error);
  }
});

// Matches DELETE requests
router.put('/testId', async (req, res, next) => {
  try {
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;
