const express = require('express');
const server = express();
const session = require('express-session');


const authRouter = require("../auth/auth-router.js");
const userRouter = require("../users/users-router.js");


const sessionConfig = {
    name: 'logginSession', 
    secret: 'What do you mean?',
    cookie: {
      maxAge: 1 * 24 * 60 * 60 * 1000,
      secure: false, //true in production
      httpOnly: true, 
    }, 
    resave: false,
    saveUninitialized: false,
};

server.use(express.json());
server.use(session(sessionConfig));
server.use("/api/auth", authRouter);
server.use("/api/users", userRouter);

server.get('/', (req, res) => {
    res.send('Hello from Express');
});

module.exports = server;