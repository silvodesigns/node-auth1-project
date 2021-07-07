const router = require('express').Router();

const usersRouter = require('../users/users-router.js');
const loginRouter = require('../login/login-router.js');
const registerRouter = require('../register/register-router.js');

router.use('/users', usersRouter);
router.use('/login', loginRouter);
router.use('/register', registerRouter);

router.get('/', (req, res) => {
    res.json({api: "INSIDE API / ROUTE"})
})

module.exports = router;