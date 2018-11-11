let fs = require('fs')
let path = require('path')

module.exports = (folder, filterExt, callback) => {

    let wantedFileExt = '.' + filterExt

    fs.readdir(folder, (err, filenameslist) => {
        if (err) {
            return callback(err)
        }
        filenameslist = filenameslist.filter(filename => {
            return path.extname(filename) === wantedFileExt
        })
        callback(null, filenameslist)
    })
}
