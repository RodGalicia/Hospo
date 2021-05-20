const router = require('express').Router();

const restaurantRoutes = require('./restaurantRoutes');
const userRoutes = require('./userRoutes');

router.use('/', restaurantRoutes);
router.use('/', userRoutes);

module.exports = router;

