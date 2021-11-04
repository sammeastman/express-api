const express = require('express');
const chirpsRouter = require ('./chirps')
const usersRouter = require('./users')


let router = express.Router();

router.use('/api/chirps', chirpsRouter);
router.use('/api/users', usersRouter);

module.exports = router;