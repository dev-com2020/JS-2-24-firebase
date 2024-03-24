import React from 'react'
import { BookshelfListRow } from './bookshelf-list-row'

interface BookUI {
    id: number;
    author: string;
    title: string;
    pubData: string;
    rating: string;
}
interface BookshelfListUI {
    books: BookUI[];
    loading: boolean;
    handleBookRemove: (id: number, title: string) => void;
}

export const BookshelfList = (props: BookshelfListUI) => {
    if (props.loading) return <p>Tabela jest ładowana...</p>

return (
    <table>
        <thead>
            <tr>
                <th/>
                <th>Title</th>
                <th>Author</th>
                <th>Pub.date</th>
                <th>rating</th>
                <th/>
            </tr>
        </thead>
        <tbody>
            {props.books.length > 0 ? (
                props.books.map((book: BookUI, idx) => (
                    <BookshelfListRow
                    key={book.id}
                    book={book}
                    position={idx + 1}
                    handleBookRemove={props.handleBookRemove}/>
                ))
            ) : (
                <tr>
                    <td style={{textAlign: 'center'}} colSpan={6}>
                        Nie ma żadnych książek...
                    </td>
                </tr>
            )
        }
        </tbody>
    </table>
)
}