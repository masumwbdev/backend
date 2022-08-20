const fs = require('fs');
// fs.writeFileSync('writeFs.txt', 'This is new written file');
// fs.writeFileSync('appendFs.txt', 'Hello world ');
// fs.appendFileSync('appendFs.txt', 'Appending file system');

const data = fs.readFileSync('writeFs.txt');
// console.log(data);
console.log(data.toString());