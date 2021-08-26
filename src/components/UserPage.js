import React, { useEffect, useState } from "react";
import { withRouter } from "react-router";
import CheckedOutBooksAll from "./CheckedOutBooksAll";
import BooksAll from "./BooksAll";
import CheckOutBook from "./CheckOutBook";

const UserPage = (props) => {

    const [userBooks, setUserBooks] = useState([])
    const [userID, setUserID] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [selectedBook, setSelectedBook] = useState(undefined)

    useEffect(() => {
        setUserID(props.match.params.userid);
    }, [props.match.params.userid])


    useEffect(() => {
        if (props.checkouts.data !== undefined && Array.isArray(props.checkouts.data)) {
            const filtered = props.checkouts.data.filter((checkout) => checkout.user_id === parseInt(userID))
            setUserBooks(filtered);
            setIsLoading(false)
        }
    }, [props.checkouts.data, userID])

    return (

        <section className="row">
            <article className="col-lg-4 col-md-12">
            {isLoading ? (
                <div>loading...</div>
            ) : (
                <BooksAll books={props.books} setSelectedBookCallback={(data) => setSelectedBook(data)}/>
            )}
            </article>
            <article className="col-lg-4 col-md-12">
            {isLoading ? (
                <div>loading...</div>
            ) : (
                <CheckOutBook selectedBook={selectedBook}/>
            )}
            </article>
            <article className="col-lg-4 col-md-12">
            {/* right column */}
            {isLoading ? (
                <div>loading...</div>
            ) : (
                <CheckedOutBooksAll books={userBooks} />
            )}
            </article>
        </section>
    )
}

export default withRouter(UserPage)