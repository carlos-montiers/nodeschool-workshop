let filterls = require('./filterls')
let folder = process.argv[2]
let ext = process.argv[3]

filterls(folder, ext, (err, list) => {
    if (err) {
        return console.error('There was an error:', err)
    }
    list.forEach(filename => {
        console.log(filename)
    })
})
