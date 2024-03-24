import React from "react";

interface BookshelfListRowUI {
    position: number;
    book: {
        id: number;
        author: string;
        title: string;
        pubData: string;
        rating: string;
    }
    handleBookRemove: (id: number, title: string) => void;
}

export const BookshelfListRow = (props: BookshelfListRowUI) => (
    <tr>
        <td>
            {props.position}
        </td>
        <td>
            {props.book.title}
        </td>
        <td>
            {props.book.author}
        </td>
        <td>
            {props.book.pubData}
        </td>
        <td>
            {props.book.rating}
        </td>
        <td>
            <button onClick={()=> props.handleBookRemove(props.book.id, props.book.title)}>
                Usuń książkę
            </button>
        </td>
    </tr>
)