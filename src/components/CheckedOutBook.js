import React from "react";

const CheckedOutBook = (props) => {

    return (
        <article className="card">
            <h3 class="card-title">{props.book.book_title}</h3>
            <h4 class="card-subtitle mb-2 text-muted">Author: {props.book.book_author}</h4>
            <div className="card-text">
                <ul>
                    <li>ISBN: {props.book.book_ISBN}</li>
                    <li>Returned: {props.book.checkout_returned ?
                        <span className="text-success">Yes</span> : 
                        <span className="text-danger">No</span> }
                     </li>
                    <li>Due: {props.book.checkout_due_date}</li>
                </ul>
            </div>
        </article>
    )
}

export default CheckedOutBook