import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DisplayAdmin from './DisplayAdminDashboard'
import Modal from './Modal'
import Pagination from './Pagination'

import swal from '@sweetalert/with-react';




const UsersContainer = (props) => {
    const [users, setUsers] = useState([])
    const [short, setShort] = useState("")
    const [reject, setReject] = useState("")
    const [isToggled, setToggled] = useState(false);
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [usersPerPage, setUsersPerPage] = useState(50)


    const frontEndTitle = 'Front-End Developer', fullStack = "FULL Stack Developer", node = "Node.js Developer", meanStack = "MEAN Stack Developer"

    useEffect(() => {
        setLoading(true)
        axios.get('https://dct-application-form.herokuapp.com/users/application-forms')
            .then((response) => {
                const result = response.data
                setUsers(result)
                setLoading(false)

            })
    }, [])

    const handleFront = () => {

        axios.get('https://dct-application-form.herokuapp.com/users/application-forms')
            .then((response) => {

                const result = response.data

                const fetchFront = result.filter((user) => {
                    if (user.jobTitle === frontEndTitle) {
                        return user
                    }
                })
                setUsers(fetchFront)

            })

    }

    const handleNode = () => {
        axios.get('https://dct-application-form.herokuapp.com/users/application-forms')
            .then((response) => {
                const result = response.data

                const fetchNode = result.filter((user) => {
                    if (user.jobTitle === node) {
                        return user
                    }
                })
                setUsers(fetchNode)

            })
    }
    const handleMean = () => {
        axios.get('https://dct-application-form.herokuapp.com/users/application-forms')
            .then((response) => {
                const result = response.data

                const fetchMean = result.filter((user) => {
                    if (user.jobTitle === meanStack) {
                        return user
                    }
                })
                setUsers(fetchMean)

            })
    }
    const handleStack = () => {
        axios.get('https://dct-application-form.herokuapp.com/users/application-forms')
            .then((response) => {
                const result = response.data
                const fetchFull = result.filter((user) => {
                    if (user.jobTitle === fullStack) {
                        return user
                    }
                })
                setUsers(fetchFull)

            })
    }





    const openModal = (id) => {
        axios.get(`https://dct-application-form.herokuapp.com/users/application-form/${id}`)
            .then((response) => {
                const result = response.data

                swal(
                    <div>
                        <h1>{result.name} profile</h1>
                        <hr />
                        <p>
                            Contact Number:  {result.phone}
                        </p>
                        <p>
                            email:  {result.email}
                        </p>
                        <p>Skills: {result.skills}</p>
                        <p>Experience: {result.experience}</p>
                    </div>
                )

            })

    }

    const handleToggle = (e, id) => {
        // e.preventDefault()

        if (e.target.name === "shortlist") {
            axios.put(`https://dct-application-form.herokuapp.com/users/application-form/update/${id}`, {
                status: "shortlisted"
            }).then((res) => {
                console.log(res.data.status)
                setShort(res.data.status)
                const result = users.map(ele => {
                    if (ele._id === res.data._id) {
                        return { ...res.data }
                    } else {
                        return ele
                    }
                })
                setUsers(result)
                // setToggled(!isToggled)
            })

        } else if (e.target.name === "reject") {

            axios.put(`https://dct-application-form.herokuapp.com/users/application-form/update/${id}`, {
                status: "rejected"
            }).then((res) => {
                console.log(res.data.status)
                setReject(res.data.status)
                const result = users.map(ele => {
                    if (ele._id === res.data._id) {
                        return { ...res.data }
                    } else {
                        return ele
                    }
                })
                setUsers(result)

            })

        }



    }

    //get current posts

    const indexOfLastUser = currentPage * usersPerPage
    const indexOfFirstUser = indexOfLastUser - usersPerPage
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser)

    //change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return (
        <div>
            {loading ? <h2>Loading....</h2>
                : (<div>
                    <DisplayAdmin
                        users={currentUsers}
                        handleFront={handleFront}
                        handleNode={handleNode}
                        handleMean={handleMean}
                        handleStack={handleStack}
                        openModal={openModal}
                        handleToggle={handleToggle}
                        short={short}
                        reject={reject}
                        isToggled={isToggled}
                    />
                    <Pagination usersPerPage={usersPerPage} totalUsers={users.length} paginate={paginate} />
                </div>)


            }


        </div>
    )





}

export default UsersContainer