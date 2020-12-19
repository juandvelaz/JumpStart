const router = require('express').Router();

// matches GET requests
router.get('/', async (req, res, next) => {
  try {
  } catch (error) {
    console.log(error);
    next(error);
  }
});

// matches POST requests
router.post('/', async (req, res, next) => {
  try {
  } catch (error) {
    console.log(error);
    next(error);
  }
});

// matches PUT requests
router.put('/testId', async (req, res, next) => {
  try {
  } catch (error) {
    console.log(error);
    next(error);
  }
});

// matches DELETE requests
router.put('/testId', async (req, res, next) => {
  try {
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;
