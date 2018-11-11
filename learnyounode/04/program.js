let fs = require('fs')
let pathToFile = process.argv[2];

fs.readFile(pathToFile, (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    let nlines = data.toString().split(/\r\n|\n|\r/).length - 1;
    console.log(nlines);
});
