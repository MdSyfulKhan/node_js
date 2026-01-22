const http = require('http');
const { hostname } = require('os');
const server = http.createServer((req, res) => {
    console.log('Server is running.');
    if (req.url === '/') {
        res.writeHead(200, { 'content-Type': 'text/html' });
        res.write('You are in home page.');
        res.end();
    } else if (req.url === "/about") {
        res.write('You are in about page');
        res.end();
    } else {
        res.write('Not Found');
        res.end();
    }
});

server.listen(3000, () => {
    console.log('Listening port : 3000');
});