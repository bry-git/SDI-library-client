import React, {useEffect, useState} from "react";
import { useHistory, withRouter } from "react-router";
import DataHandler from "../DataHandler";

const UsersPage = () => {

    const [data, setData] = useState([{user_name: 'frick this'}])
    const [isLoading, setIsLoading] = useState(true)
    const history = useHistory()

    useEffect(() => {
        setIsLoading(true)
        const dataHandler = new DataHandler()
        dataHandler.getUsers()
        .then((data) => setData(data))
        .then(() => setIsLoading(false));
    }, [])

    const handleClick = (user_id) => {
        history.push(`/users/${user_id}`)
    }

    const displayUsersList = () => {

        if (isLoading) {
            return (<div>Loading</div>);
        } else {
            return (data.data.map((user) => <p onClick={() => handleClick(user.user_id)}>{user.user_name}</p>))
        }
    }

    return (
        <section className="user-list">
            <h3>Users List</h3>
            <p>select a user:</p>
            {displayUsersList()}
        </section>      
    )
}

export default withRouter(UsersPage)