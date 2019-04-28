
// How search for documents

const MongoClient = require("mongodb").MongoClient
const assert = require("assert")

const url = "mongodb://localhost:27017"
const dbName = "learnyoumongo"
const collectionName = "parrots"

let minAge = Number(process.argv[2])
assert.equal(isNaN(minAge), false)


const client = new MongoClient(url, { useNewUrlParser: true })
client.connect((err) => {
  assert.equal(null, err)

  const db = client.db(dbName)
  let collection = db.collection(collectionName)

  collection.find({
    "age": {
      $gt: minAge
    }
  }).toArray()
    .then(documents => {
      console.log(documents)
    }).catch(err => {
      console.error(`Failed to find item: ${err}`)
    })

  client.close()
})
