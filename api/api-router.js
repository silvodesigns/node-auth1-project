const router = require('express').Router();

const usersRouter = require('../users/users-router.js');

router.use('/users', usersRouter);

router.get('/', (req, res) => {
    res.json({api: "INSIDE API / ROUTE"})
})

module.exports = router;