let http = require('http')
let bl = require('bl')
let url1 = process.argv[2]
let url2 = process.argv[3]
let url3 = process.argv[4]

let results = []
let count = 0

function printResults() {
    for (let i = 1; i <= 3; i++) {
        console.log(results[i])
    }
}

function httpget(url, index) {
    http.get(url, (response) => {
        response.pipe(bl(function (err, data) {
            if (err) {
                return console.error(err)
            }
            results[index] = data.toString()
            count++
            if (count === 3) {
                printResults()
            }
        }))
    })
}

httpget(url1, 1)
httpget(url2, 2)
httpget(url3, 3)
