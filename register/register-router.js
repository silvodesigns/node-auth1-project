const router = require('express').Router();
const bcrypt = require('bcryptjs');
const Users = require('../users/users-model.js');

//api/register

router.get('/', (req, res) => {
   res.send("Welcome to register")
})

router.post('/', (req, res) => {
    let user = req.body;
    console.log(user);
    // converts the password into hash before sending to database
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;

    Users.register(user)
        .then(registered => {
            res.status(201).json(registered)
        })
        .catch(error => {
            res.status(500).json(error);
        })
});


module.exports = router;