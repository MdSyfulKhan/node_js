const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const myReadStream = fs.createReadStream(`${__dirname}/textData.txt`, 'utf8');
    myReadStream.pipe(res);
});

server.listen(3000, () => {
    console.log('Listening port : 3000');
});