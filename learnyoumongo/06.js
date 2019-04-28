// Update

const MongoClient = require("mongodb").MongoClient
const assert = require("assert")

const url = "mongodb://localhost:27017"
const dbName = process.argv[2] || null
assert(dbName !== null, true)

const collectionName = "users"

let user


const client = new MongoClient(url, { useNewUrlParser: true })
client.connect((err) => {
    assert.equal(null, err)

    const db = client.db(dbName)
    let collection = db.collection(collectionName)

    let item = {
        "name": "Tina",
        "age": 30,
        "username": "tinatime"
    }

    collection.updateOne(item, {
        $set: {
            "age": 40
        }
    }
    ).then(result => {
        // document was updated
    }).catch(err => {
        console.error(`Failed to update item: ${err}`)
    })

    client.close()
})
