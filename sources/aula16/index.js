const Mongo = require('./mongo')
const { ObjectID } = require('bson')

async function main() {

    const URI = "mongodb://localhost:27017?useUnifiedTopology=true"
    const mongo = new Mongo(URI)
    await mongo.connect()

    const cursor = await mongo.find("test", "restaurants", {})

    let processed = 0
    
    while (await cursor.hasNext()){

        if (processed % 100 === 0){
            console.log(`${processed} itens processados.`)
        }

        const next = await cursor.next()

        if (next.address.coord.length === 2){
    
            const updateDoc = {
                $set: {
                    "address.coordv5": {
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
