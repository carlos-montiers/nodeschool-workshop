// Insert

const MongoClient = require("mongodb").MongoClient
const assert = require("assert")

const url = "mongodb://localhost:27017"
const dbName = "learnyoumongo"
const collectionName = "docs"

let firstName = process.argv[2] || ""
let lastName = process.argv[3] || ""

let newDocument = {
    "firstName": firstName,
    "lastName": lastName
}

const client = new MongoClient(url, { useNewUrlParser: true })
client.connect((err) => {
    assert.equal(null, err)

    const db = client.db(dbName)
    let collection = db.collection(collectionName)

    collection.insertOne(newDocument)
        .then(result  => {
            console.log(JSON.stringify(newDocument))
        }).catch(err => {
            console.error(`Failed to insert item: ${err}`)
        })

    client.close()
})
