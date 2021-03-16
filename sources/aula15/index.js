const Mongo = require('./mongo')
const txtgen = require('txtgen')

const author = ['Abdus Salam', 'Paul Dirac', 'Georges Lemaitre', 'Maria Mayer', 'Jocelyn Bell']
const tags = ['dog', 'cat', 'bird', 'lion', 'rabbit', 'monkey', 'giraffe', 'ant']

async function main() {
    const URI = "mongodb://localhost:27017?useUnifiedTopology=true"
    const mongo = new Mongo(URI)
    await mongo.connect()

    const total = 500000
    const batchSize = 10000
    const it = Math.floor(total / batchSize)

    for (let i = 0; i < it; i++) {
        const batch = []
        for (j = 0; j < batchSize; j++) {
            batch.push(generateData())
        }
        console.log(`Inserting batch ${i+1} of ${it}. Batch size is ${batch.length}`)
        const hrstart = process.hrtime()
        await mongo.insertMany('teste-index-db', 'posts5', batch)
        console.log(`Inserted in %dms`, process.hrtime(hrstart)[1] / 1000000)
    }

    await mongo.close()

}

function rnd(min, max) {
    return Math.floor(Math.random() * max) + min
}

function pickAuthor() {
    return author[rnd(0, author.length - 1)]
}

function pickTags() {
    const len = rnd(1, tags.length - 1)
    const rndtags = []
    for (let i = 0; i < len; i++) {
        rndtags.push(tags[rnd(0, tags.length - 1)])
    }
    return rndtags
}

function generateData() {
    const title = txtgen.sentence()
    const body = txtgen.article()
    return {
        title: title,
        body: body,
        author: pickAuthor(),
        caracters: body.length,
        tags: pickTags(),
        score: rnd(1, 1000)
    }
}

main()
