const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const postRoutes = require('./touch post-routes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);

module.exports = router;