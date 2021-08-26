import React from "react";
import CheckedOutBook from "./CheckedOutBook";

const CheckedOutBooksAll = (props) => {

    const displayBooks = () => {
        if (props.books === undefined) {
            return (<div>Loading</div>)
        } else {
            const bookList = props.books.map((book) => {
                return (
                    <CheckedOutBook book={book} />
                )
            })
            return bookList;
        }
    }


    return (
        <section className="row p-2 m-2 justify-content-center">
            <div className="col-10">
            <header className="h2 text-center">Checked Out Books</header>
            {displayBooks()}
            </div>
        </section>
    )
}

export default CheckedOutBooksAll