let fs = require('fs')
let pathToFile = process.argv[2];
let buffer
let nlines

buffer = fs.readFileSync(pathToFile)
nlines = buffer.toString().split(/\r\n|\n|\r/).length - 1;

console.log(nlines)
