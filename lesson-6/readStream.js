const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('<body><form method="POST" action="/process"><input type="text" name="msg"></form></body>');
        res.end();
    } else if (req.url === "/process" && req.method === "POST") {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end', () => {
            console.log('Finished srteaming');
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            res.write('Submiting');
            res.end();
        });

    } else {
        res.write('Not Found');
        res.end();
    }
});

server.listen(3000, () => {
    console.log('Listening port : 3000');
});