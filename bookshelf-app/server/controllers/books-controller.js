const knex = require('./../db')

exports.booksAll = async (req, res) => {
    knex.select('*')
    .from('books')
    .then(userData => {
        res.json(userData)
    })
    .catch(err => {
        res.json({message: `Mamy błąd ${err}`})
    })
}

exports.booksCreate = async (req, res) => {
    knex('books')
    .insert({
        'author' : req.body.author,
        'title' : req.body.title,
        'pubDate' : req.body.pubDate,
        'rating' : req.body.rating
    })
    .then(() => {
        res.json({message: `Książka ${req.body.title} autora ${req.body.author} stworzona`})
    })
    .catch(err => {
        res.json({message: `Mamy błąd ${err} podczas dodawania ${req.body.title}`})
    })
}

exports.booksDelete = async (req, res) => {
    knex('books')
    .where('id', req.body.id)
    .del()
    .then(() =>{
        res.json({message: `Książka ${req.body.id} została skasowana`})
    })
    .catch(err => {
        res.json({message: `Mamy błąd ${err} podczas usuwania ${req.body.id}`})
    })
}

exports.bookReset = async (req,res) => {
    knex.select('*')
    .from('books')
    .truncate()
    .then(() => 
    res.json({message: 'Lista książek wyczyszczona'}))
    .catch(err => {
        res.json({message: `Mamy błąd ${err} podczas czyczesnia`})
    })
}
