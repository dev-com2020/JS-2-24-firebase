const express = require('express')
const booksRoutes = require('./../controllers/books-controller')
const router = express.Router()

router.get('/all', booksRoutes.booksAll)
router.get('/create', booksRoutes.booksCreate)
router.get('/delete', booksRoutes.booksDelete)
router.get('/reset', booksRoutes.bookReset)

module.exports = router
