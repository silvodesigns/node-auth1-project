const express = require('express');
const session = require('express-session');
const apiRouter = require('./api-router.js');

const server = express();

const sessionConfig = {
    name: "monkey", //sid default name
    secret: "keep it secret, keep it safe!",
    cookie: {
        maxAge: 1000 * 30,
        secure: false, // should be true during production
        httpOnly: true,
    },
    resave: false,
    saveUnitialized: false, //GDPR laws about this
};

server.use(express.json());
server.use(session(sessionConfig));
server.use('/api', apiRouter);

module.exports = server;