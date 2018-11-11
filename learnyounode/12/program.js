let http = require('http')
let map = require('through2-map')
let port = Number(process.argv[2])

let server = http.createServer((request, response) => {
    if (request.method !== 'POST') {
        response.writeHead(405)
        response.write('Only POST Method Allowed\n')
        response.end()
        return
    }
    response.writeHead(200, { 'Content-Type': 'text/plain' })
    request.pipe(map((chunk) => {
        return chunk.toString().toUpperCase()
    })).pipe(response)
})
server.listen(port)
