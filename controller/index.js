const router = require('express').Router();

const apiRoutes = require('./api');


router.use('/api', apiRoutes);

const restaurantRoutes = require('./restaurantRoutes');

router.use('/', restaurantRoutes);

module.exports = router;

