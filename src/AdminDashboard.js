import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DisplayAdmin from './DisplayAdminDashboard'

const AdminDashboard = (props) => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get('https://dct-application-form.herokuapp.com/users/application-forms')
            .then((response) => {
                const result = response.data
                console.log("here", result)
                setUsers(result)

            })
            .catch((error) => {
                alert(error.message)

            })

    }, [])


    return (
        <div>
            <DisplayAdmin users={users} />
        </div>
    )

}

export default AdminDashboard