import React, { useState } from 'react'
import TechSkills from './TechSkills'
import swal from 'sweetalert';
import axios from 'axios'
import { Button } from 'react-bootstrap'



const DisplayAdmin = (props) => {
    // const [short, setShort] = useState("shortlist")
    // const [reject, setShort] = useState("reject")


    const { users, handleNode, handleFront, handleMean, handleStack, openModal, handleToggle, isToggled } = props

    return (
        <div style={{ padding: "30px" }}>

            <h1>Admin Dashboard</h1>
            <TechSkills users={users} handleNode={handleNode} handleFront={handleFront} handleMean={handleMean} handleStack={handleStack} />
            <p style={{ padding: "10px" }}>List of candidates applied for - {users.length} </p>
            <table class="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Technical skills</th>
                        <th>Experience</th>
                        <th>Applied Date</th>
                        <th>View Details</th>
                        <th>Update Application status</th>

                    </tr>

                </thead>

                <tbody>
                    {users.map((user) => {
                        return (
                            <tr key={user._id}>

                                <td>{user.name}</td>
                                <td>{user.skills}</td>
                                <td>{user.experience}</td>
                                <td>{user.createdAt}</td>
                                <td><Button onClick={() => {
                                    openModal(user._id)
                                }}>View details</Button></td>

                                <td> {user.status === 'applied' ? (
                                    <div>
                                        <button name="shortlist" class="btn btn-success" onClick={(e) => {
                                            handleToggle(e, user._id)
                                        }}>shortlist</button>
                                        <button name="reject" class="btn btn-danger" onClick={(e,) => {
                                            handleToggle(e, user._id)
                                        }}>reject</button>
                                    </div>
                                ) : (user.status === "shortlisted" ? (
                                    <button class="btn btn-success">shortlisted</button>
                                ) :
                                    (
                                        <button class="btn btn-danger">rejected</button>
                                    )
                                )}

                                </td>

                            </tr>


                        )
                    })}

                </tbody>
            </table>
        </div>

    )
}

export default DisplayAdmin