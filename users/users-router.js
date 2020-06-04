const router = require('express').Router();
const bcrypt = require('bcryptjs');
const Users = require('./users-model.js');

//api/users

router.get('/',  auth, (req, res) => {
  Users.find()
  .then(users => {
     res.json(users);
  })
  .catch(error => res.send(error));
});

function auth(req, res, next){
   if(req.session && req.session.user){
      next();
   } else {
      res.status(401).json({message: "You shall not pass"});
   }
}


module.exports = router;