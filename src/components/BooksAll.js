import React from "react";
import Book from "./Book";

const BooksAll = (props) => {

    const displayBooks = () => {
        if (props.books.data === undefined) {
            return (<div>Loading</div>)
        } else {
            const bookList = props.books.data.map((book) => {
                return (
                    <Book book={book} setSelectedBookCallback={(book) => props.setSelectedBookCallback(book)}/>
                )
            })
            return bookList;
        }
    }


    return (
        <section className="row p-2 m-2 justify-content-center">
            <div className="col-10">
            <header className="h2 text-center">Books</header>
            {displayBooks()}
            </div>
        </section>
    )
}

export default BooksAll