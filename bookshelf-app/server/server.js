const express = require('express')
const bodyParser = require('body-parser')
const compression = require('compression')
const cors = require('cors')
const helmet = require('helmet')

const booksRouter = require('')

const PORT = process.env.PORT || 4001

const app = express()

app.use(cors())
app.use(helmet())
app.use(compression())
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

app.use('/books',booksRouter)

app.use(function (err,req,res,next) {
    console.error(err.stack)
    res.status(500).send('Coś nie działa!')
})

app.use(function (req,res,next) {
    res.status(404).send('Nie ma takiej strony!')
})

app.listen(PORT, function() {
    console.log(`Serwer działa na ${PORT}`)
})