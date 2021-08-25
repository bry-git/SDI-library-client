import React from "react";

const props = { 
    book_id: 1, 
    book_title: "between two ferns", 
    book_author: "zack gil", 
    book_ISBN: "123rjkl563", 
    created_at: "2021-08-25T19:46:03.641Z", 
    updated_at: "2021-08-25T19:46:03.641Z" 
}


const Book = (porps) => {

    return (
        <div className="book">
            <h6>{props.book_title}</h6>
        </div>
    )
}

export default Book