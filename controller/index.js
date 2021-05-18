const router = require('express').Router();

const restaurantRoutes = require('./restaurantRoutes');

router.use('/', restaurantRoutes);

module.exports = router;

