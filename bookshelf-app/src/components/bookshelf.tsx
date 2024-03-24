import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { BookshelfList } from './bookshelf-list'

export const Bookshelf = () => {
    const [author, setAuthor] = useState('')
    const [title, setTitle] = useState('')
    const [pubDate, setPubDate] = useState('')
    const [rating, setRating] = useState('')
    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchBooks()
    }, [])

    const fetchBooks = async () => {
        axios
        .get('http://localhost:4001/books/all')
        .then(response => {
            setBooks(response.data)
            setLoading(false)
        }).catch(error => console.log(`Jest błąd ${error}`))
    }

    const handleInputsReset = () => {
        setAuthor('')
        setTitle('')
        setPubDate('')
        setRating('')
    }

    const handleBookCreate = () => {
        axios
        .post('http://localhost:4001/books/create', {
            author: author,
            title: title,
            pubDate: pubDate,
            rating: rating
        })
        .then(res => {
            console.log(res.data)
            fetchBooks()
        }).catch(error => console.log(`Jest błąd ${error} podczas tworzenia`))

    }

    const handleBookSubmit = () => {
        if (author.length > 0 && title.length > 0 && pubDate.length > 0 && rating.length > 0){
            handleBookCreate()
            console.log('Książka została dodana')
            handleInputsReset()
        }
    }

    const handleBookRemove = (id: number, title: string) => {
        axios
        .put('http://localhost:4001/books/delete', {id:id})
        .then(() => {
            console.log('Książka usunięta')
            fetchBooks()
        }).catch(error => console.log(`Jest błąd ${error} podczas usuwania`))
    }

    const handleListReset = () => {
        axios
        .put('http://localhost:4001/books/reset')
        .then(() => {
            fetchBooks()
        }).catch(error => console.log(`Jest błąd ${error} podczas resetowania`))
    }

    return (
        <div>
            <div>
                <div>
                    <fieldset>
                        <label>Wpisz tytuł:</label>
                        <input type='text' id='title' value={title} onChange={(e) => setTitle(e.currentTarget.value)}></input>
                    </fieldset>
                </div>
                <div>
                    <fieldset>
                        <label>Wpisz autora:</label>
                        <input type='text' id='author' value={author} onChange={(e) => setAuthor(e.currentTarget.value)}></input>
                    </fieldset>
                </div>
                <div>
                    <fieldset>
                        <label>Wpisz date publikacji:</label>
                        <input type='text' id='pubData' value={pubDate} onChange={(e) => setPubDate(e.currentTarget.value)}></input>
                    </fieldset>
                </div>
                <div>
                    <fieldset>
                        <label>Wpisz ocene:</label>
                        <input type='text' id='rating' value={rating} onChange={(e) => setRating(e.currentTarget.value)}></input>
                    </fieldset>
                </div>
                <div><button onClick={handleBookSubmit}>Dodaj książkę</button></div>
            </div>
            <BookshelfList books={books} loading={loading} handleBookRemove={handleBookRemove}/>
            {books.length > 0 && (
                <button onClick={handleListReset}>Zresetuj</button>
            )}
        </div>
    )
}