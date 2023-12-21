const router = require('express').Router();
const categoryRouter = require('./api/category.routes');

router.use('/api/category', categoryRouter);

module.exports = router;
