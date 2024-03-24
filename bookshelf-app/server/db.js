const path = require('path')

const dbPath = path.resolve(__dirname, 'db/database.sqlite')

const knex = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: dbPath,
    },
    useNullAsDefault: true
})

knex.schema.hasTable('books').then((exists) => {
    if (!exists) {
        return knex.schema.createTable('books', (table) => {
            table.increments('id').primary()
            table.string('author')
            table.string('title')
            table.string('pubData')
            table.integer('rating')
        })
        .then(()=>{
            console.log('Table books create')
        })
        .catch((error) => {
            console.log(`Jest jakiś błąd: ${error}`)
        })
    }
}).then(() => {
    console.log('done')
})
.catch((error) => {
    console.log(`Jest jakiś błąd ${error}`)
})

knex.select('*').from('books')
.then(data => console.log('data',data))
.catch(err => console.log(err))

module.exports = knex