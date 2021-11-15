import React, { useState, useEffect } from 'react'
import axios from 'axios'
import JobForm from './JobForm'


const AddJob = (props) => {

    // const [addJob, setAddJob] = useState([])
    const [isAdded, setIsAdded] = useState(false)
    const [users, setUsers] = useState([])


    useEffect(() => {
        axios.get('https://dct-application-form.herokuapp.com/users/application-forms')
            .then((response) => {
                const result = response.data
                console.log(result)
                setUsers(result)

            })
            .catch((error) => {
                alert(error.message)

            })

    }, [])

    const formSubmission = (job) => {
        //     console.log(job)

        axios.post('https://dct-application-form.herokuapp.com/users/application-form', job)
            .then((response) => {
                const result = response.data
                console.log(result)
                addUser(result)
                alert('job applied')
                props.history.push('/userContainer')
            })
            .catch((err) => {

                alert(err.message)

            })

    }

    const addUser = (user) => {

        setUsers([...users, user])
        setIsAdded(true)

    }

    // console.log("users", users)

    return (
        <div >

            <JobForm formSubmission={formSubmission} isAdded={isAdded} />



        </div>
    )
}

export default AddJob