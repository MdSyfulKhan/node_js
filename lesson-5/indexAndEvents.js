// ============== PATH =================
// const path = require('path');
// const myPath = 'C:\Users\User\OneDrive\Desktop\NodeJS\index.js';
// console.log(path.basename(myPath));
// console.log(path.dirname(myPath));
// console.log(path.extname(myPath));
// console.log(path.parse(myPath));



// ============== OS =================
// const os = require('os');
// console.log(os.platform());
// console.log(os.homedir());
// console.log(os.freemem());
// console.log(os.cpus());



// ============== FS =================
// const fs = require('fs');
// console.log(fs.writeFileSync('myFile.txt', 'Hello Programmers. '));
// console.log(fs.appendFileSync('myFile.txt', 'How are you?'));
// console.log('Sync');
// const data = fs.readFileSync('myFile.txt');
// console.log(data.toString());
// console.log('Me last');

// // ====async
// console.log('async');
// fs.readFile('myFile.txt', (err, data) => {
//     console.log(data.toString());
// });
// console.log('My first then myFile data');


// ============== EVENT =================
const School = require('./school');
const school = new School();

school.on('bellRing', ({ period, text }) => {
    console.log(`We need to run becouse ${period} ${text}`);
});

console.log(School);
school.startPeriod();


