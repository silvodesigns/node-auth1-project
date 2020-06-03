const express = require('express');
const server = express();

const authRouter = require("../auth/auth-router.js");

server.use("/api/auth", authRouter);

server.get('/', (req, res) => {
    res.send('Hello from Express');
});



server.listen(3000, () => {
    console.log('Server running on localhost');
});