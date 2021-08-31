const router = require('express').Router();
const tripsRoutes = require('./tripsRoutes');
const travelerRoutes = require('./travelerRoutes');
const locationRoutes = require('./locationRoutes');

router.use('/trips', tripsRoutes);
router.use('/traveler', travelerRoutes);
router.use('/location', locationRoutes);

module.exports = router;

