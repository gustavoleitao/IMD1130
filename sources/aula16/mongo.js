const { MongoClient } = require("mongodb")

class Mongo {

    constructor(uri){
        this.uri = uri
    }

    async connect(){
        this.client = new MongoClient(this.uri)
        this.connection = await this.client.connect()
    }

    async find(db, collection, query){
        const database = this.client.db(db)
        const col = database.collection(collection)
        return await col.find(query)
    }

    async insertOne(db, collection, doc){
        const database = this.client.db(db)
        const col = database.collection(collection)
        return await col.insertOne(doc)
    }

    async insertMany(db, collection, docs){
        const database = this.client.db(db)
        const col = database.collection(collection)
        return await col.insertMany(docs)
    }

    async updateOne(db, collection, filter, query){
        const database = this.client.db(db)
        const col = database.collection(collection)
        return await col.updateOne(filter, query)
    }

    async close(){
        await this.client.close();
    }

}

module.exports = Mongo