// Aggregate

const MongoClient = require("mongodb").MongoClient
const assert = require("assert")

const url = "mongodb://localhost:27017"
const dbName = "learnyoumongo"
const collectionName = "prices"

const expectedSize = process.argv[2] || null
assert(expectedSize !== null, true)

const client = new MongoClient(url, { useNewUrlParser: true })
client.connect((err) => {
    assert.equal(null, err)

    const db = client.db(dbName)
    let collection = db.collection(collectionName)

    const pipeline = [
        {
            "$match": {
                "size": expectedSize
            }
        },
        {
            "$group": {
                // The _id field is mandatory; however,
                // you can specify an _id value of null, or any other constant value, to calculate accumulated values for all the input documents as a whole.
                "_id": "avgPricetotal",
                "avgPricetotal": {
                    "$avg": "$price"
                }
            }
        }
    ]

    collection.aggregate(pipeline).toArray()
        .then(results => {
            if (!results.length) {
                throw "No results'"
            }
            let avgPricetotal = results[0].avgPricetotal
            console.log(avgPricetotal.toFixed(2))
        }).catch(err => {
            console.error(`Failed to aggregate: ${err}`)
        })

    client.close()
})
