const router = require('express').Router();

const homeRoutes = require('./homeRoutes');
const dashRoutes = require('./dashRoutes');
const loginRoutes = require('./loginRoutes');

router.use('/', homeRoutes);
router.use('/dash', dashRoutes);
router.use('/login', loginRoutes);

module.exports = router;