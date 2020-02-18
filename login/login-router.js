const router = require('express').Router();

//api/login

router.get('/', (req, res) => {
   res.send("Welcom to log in")
})


module.exports = router;