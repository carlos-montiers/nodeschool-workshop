//TCP server
let net = require('net')
let strftime = require('strftime')
let port = Number(process.argv[2])

let server = net.createServer((socket) => {
    let dCurrDate = new Date()
    let sFormattedDate = strftime('%Y-%m-%d %H:%M', dCurrDate)

    socket.write(sFormattedDate)
    socket.write('\n')
    socket.end()
})
server.listen(port)
