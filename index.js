const server = require('./api/server.js');

server.listen(5000, () => {
    console.log('Server running on http://localhost:5000')
});