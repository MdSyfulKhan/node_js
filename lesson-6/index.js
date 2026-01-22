const fs = require('fs');
const ourReadStream = fs.createReadStream(`${__dirname}/textData.txt`);
const ourWriteStream = fs.createWriteStream(`${__dirname}/output.txt`);

// ourReadStream.on('data', (chunk) => {
//     ourWriteStream.write(chunk);
// });


ourReadStream.pipe(ourWriteStream);

console.log('hello');