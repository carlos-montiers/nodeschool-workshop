// Count

const MongoClient = require("mongodb").MongoClient
const assert = require("assert")

const url = "mongodb://localhost:27017"
const dbName = "learnyoumongo"
const collectionName = "parrots"

let age = Number(process.argv[2])
assert.equal(isNaN(age), false)


const client = new MongoClient(url, { useNewUrlParser: true })
client.connect((err) => {
    assert.equal(null, err)

    const db = client.db(dbName)
    let collection = db.collection(collectionName)

    collection.count({
        "age": {
            $gt: age
        }
    }
    ).then(count => {
        console.log(count)
    }).catch(err => {
        console.error(`Failed to count item: ${err}`)
    })

    client.close()
})
