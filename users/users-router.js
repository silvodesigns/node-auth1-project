const router = require('express').Router();

//api/users

router.get('/', (req, res) => {
   res.send("Welcom to users")
})


module.exports = router;