const express = require('express');
const server = express();

server.get('/', (req, res) => {
    res.send('Hello from Express');
});


server.post('/register', (req, res) => {
    res.send('Hello from Express');
});


server.get('/login', (req, res) => {
    res.send('Hello from Express');
});

server.get('/users', (req, res) => {
    res.send('Hello from Express');
});




server.listen(3000, () => {
    console.log('Server running on localhost');
});