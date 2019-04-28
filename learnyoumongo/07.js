// Delete

const MongoClient = require("mongodb").MongoClient
const assert = require("assert")

const url = "mongodb://localhost:27017"

const dbName = process.argv[2] || null
assert(dbName !== null, true)

const collectionName = process.argv[3] || null
assert(collectionName !== null, true)

const idToDelete = process.argv[4] || null
assert(idToDelete !== null, true)


const client = new MongoClient(url, { useNewUrlParser: true })
client.connect((err) => {
    assert.equal(null, err)

    const db = client.db(dbName)
    let collection = db.collection(collectionName)

    let item = {
        "_id": idToDelete,
    }

    collection.deleteOne(item
    ).then(result => {
        // document was updated
    }).catch(err => {
        console.error(`Failed to delete item: ${err}`)
    })

    client.close()
})
