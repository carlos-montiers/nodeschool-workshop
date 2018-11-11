let http = require('http')
let url = require('url')
let port = Number(process.argv[2])

let server = http.createServer((request, response) => {

    let urlreq = url.parse(request.url, true)
    let endpoint = urlreq.pathname
    let ddate = new Date(urlreq.query.iso)
    let json = null

    if (endpoint === '/api/parsetime') {
        json = JSON.stringify({
            "hour": ddate.getHours(),
            "minute": ddate.getMinutes(),
            "second": ddate.getSeconds()
        })
    }
    else if (endpoint === '/api/unixtime') {
        json = JSON.stringify({
            "unixtime": ddate.getTime()
        })

    }

    if (json) {
        response.writeHead(200, { 'Content-Type': 'application/json' })
        response.write(json);
    } else {
        response.writeHead(404)
    }

    response.end()

})
server.listen(port)
