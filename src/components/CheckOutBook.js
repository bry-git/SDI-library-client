import React from "react";
import { useEffect, useState } from "react/cjs/react.development";
import DataHandler from "../DataHandler";

const CheckOutBook = (props) => {

    const [data, setData] = useState({ })

    useEffect(() => {
        if (props.selectedBook !== undefined) {
            const dataHandler = new DataHandler();
            dataHandler.getCheckoutByBook(parseInt(props.selectedBook))
                .then((data) => setData(data))
        }
    }, [props.selectedBook])

    const handleSubmit = (data) => {

        //  postCheckout(new_status_data) {
        //     "user_id": "1",
        //     "book_id": "1",
        //     "checkout_returned": "false",
        //     "checkout_due_date": "12/09/2021"
        // }
    }

    return (
        <>
            <p>select an availble book to check it out</p>
            {props.selectedBook ? (
                <div>
                    <form>

                    </form>
                </div>

            ) : (
                <p>no book selected</p>
            )}
        </>
    )
}

export default CheckOutBook