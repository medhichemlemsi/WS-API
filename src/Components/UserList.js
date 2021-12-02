import React, { useState, useEffect } from 'react'
import axios from 'axios'
import User from './User'

const UserList = () => {
    const [listUsers, setListUsers] = useState([])

    const fetchUsers = () => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(res => setListUsers(res.data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        fetchUsers()
    }, [])


    return (
        <div className="row">
            {listUsers.map((el, i) => <User user={el} key={i} />)}
        </div>
    )
}




export default UserList