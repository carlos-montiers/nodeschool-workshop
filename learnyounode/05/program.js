let fs = require('fs')
let path = require('path')
let folder = process.argv[2]
let extFilter = '.' + process.argv[3]

fs.readdir(folder, (err, files) => {
    if (err) {
        console.log(err)
        return
    }
    files.forEach(filename => {
        let ext = path.extname(filename)
        if (ext === extFilter) {
            console.log(filename)
        }
    })
})
