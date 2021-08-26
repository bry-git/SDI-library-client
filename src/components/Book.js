import React from "react";

const Book = (props) => {

    return (
        <article className="card" onClick={() => props.setSelectedBook({book_id: 69})}>
            <h3 class="card-title">{props.book.book_title}</h3>
            <h4 class="card-subtitle mb-2 text-muted">Author: {props.book.book_author}</h4>
            <p class="card-text">ISBN: {props.book.book_ISBN}</p>
        </article>
    )
}

export default Book