const router = require('express').Router();
const bcrypt = require('bcryptjs');
const Users = require('../users/users-model.js');

//api/login

router.get('/', (req, res) => {
   res.send("Welcom to log in")
})

router.post('/', (req, res ) => {
   
   let {username, password} = req.body;

   Users.findBy({username})
      .first()// makes it return object instead of array of objs
      .then( user => {
        if(user && bcrypt.compareSync(password, user.password)) {
            req.session.user = user;//user saved in session
            res.status(200).json({
               messsage: `Welcome ${user.username}`
           });
            
        } else {
           res.status(401).json({message: "You shall not pass"});
        }
        
      })
      .catch(error => {
         res.status(500).json(error);
      })
   

});
module.exports = router;