//HTTP server
let http = require('http')
let fs = require('fs')
let port = Number(process.argv[2])
let pathToFile = process.argv[3]

let server = http.createServer((request, response) => {
    const filestream = fs.createReadStream(pathToFile);
    response.writeHead(200, { 'Content-Type': 'text/plain' })
    filestream.pipe(response)
})
server.listen(port)
