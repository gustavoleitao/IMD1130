const Mongo = require('./mongo')
const { ObjectID } = require('bson')

async function main() {
    
    const URI = "mongodb://localhost:27017?useUnifiedTopology=true"
    const mongo = new Mongo(URI)
    await mongo.connect()

    const total = 500000
    const batchSize = 10000
    const it = Math.floor(total / batchSize)

    const doc = await mongo.find("test", "restaurants", {})

    let processed = 0
    
    while (await doc.hasNext()){

        if (processed % 100 === 0){
            console.log(`${processed} itens processados.`)
        }

        const next = await doc.next()

        if (next.address.coord.length === 2){
            next.address.coordv2 = {
                type: "Point",  coordinates: next.address.coord
            }
    
            const updateDoc = {
                $set: {
                    "address.coordv3": {
                        type: "Point",  coordinates: next.address.coord
                    }
                },
            }
    
            const result = await mongo.updateOne("test", "restaurants", {_id: next._id}, updateDoc)
        }
        
        processed++
    }

    await mongo.close()

}


main()
