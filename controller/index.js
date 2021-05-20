const router = require('express').Router();

const restaurantRoutes = require('./restaurantRoutes');
const userRoutes = require('./userRoutes');

router.use('/restaurants', restaurantRoutes);
router.use('/users', userRoutes);

module.exports = router;

