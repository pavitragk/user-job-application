import React, { useState } from 'react'
import { Link, Route } from 'react-router-dom'




const JobForm = (props) => {

    const { formSubmission, isAdded } = props
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [jobTitle, setJobTitle] = useState("")
    const [experience, setExperience] = useState("")
    const [skills, setSkills] = useState([])
    const [isSubmit, setIsSubmit] = useState(false)
    const [formErrors, setFormErrors] = useState({})
    const errors = {}

    const onNameChange = (e) => {
        const result = e.target.value
        setName(result)

    }

    const onEmailChange = (e) => {
        const result = e.target.value
        setEmail(result)

    }

    const onPhoneChange = (e) => {
        const result = e.target.value
        setPhone(result)

    }

    const onExperienceChange = (e) => {
        const result = e.target.value
        setExperience(result)

    }

    const onTechChange = (e) => {
        const result = e.target.value
        setSkills(result)

    }

    const onJobChange = (e) => {

        const result = e.target.value
        setJobTitle(result)

    }
    const runValidation = () => {
        if (name.trim().length === 0) {
            errors.name = 'name caanot be empty'
        } else if (email.trim().length === 0) {
            errors.email = 'email caanot be empty'

        } else if (phone.trim().length === 0) {
            errors.phone = 'phone cannot be empty'
        }

    }
    const handleSubmission = (e) => {
        e.preventDefault()
        runValidation()
        if (Object.keys(errors).length === 0) {

            setFormErrors({})
            const formData = {
                name: name,
                email: email,
                phone: phone,
                skills: skills,
                experience: experience,
                jobTitle: jobTitle
            }
            formSubmission(formData)
            setIsSubmit(true)

        } else {
            setFormErrors(errors)
        }



    }

    return (

        <div className="container-sm px-5 mt-4" >
            <h1 className="text-success ml-5 mb-5" >Apply job</h1>
            <form onSubmit={handleSubmission} className="container"  >
                <div className="row mb-3" >
                    <label for="inputEmail3" className="col-sm-2 col-form-label">Full name</label>
                    <div className="col-sm-10" >
                        <input type="text" onChange={onNameChange} style={{ width: "60%" }} value={name} placeholder="enter your name" class="d-inline-flex p-2 bd-highlight" /><br />
                        {formErrors.name && <span className="text-danger" style={{ padding: "10px" }}>{formErrors.name} </span>}<br />

                    </div>
                </div>
                <div className="row mb-3">
                    <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input style={{ width: "60%" }} type="text" onChange={onEmailChange} value={email} placeholder="example@gmail.com" class="d-inline-flex p-2 bd-highlight" /><br />
                        {formErrors.email && <span class="text-danger" style={{ padding: "10px" }}>{formErrors.email} </span>}<br />

                    </div>
                </div>
                <div className="row mb-3">
                    <label for="inputEmail3" className="col-sm-2 col-form-label">Contact number</label>
                    <div className="col-sm-10">
                        <input style={{ width: "60%" }} type="text" onChange={onPhoneChange} value={phone} placeholder="+9195919304" class="d-inline-flex p-2 bd-highlight" /><br />
                        {formErrors.phone && <span class="text-danger" style={{ padding: "10px" }}>{formErrors.phone} </span>}<br />

                    </div>
                </div>
                <div className="row mb-3">
                    <label for="inputEmail3" className="col-sm-2 col-form-label">Apply for job</label>
                    <div className="col-sm-10">
                        <select style={{ width: "60%" }} value={jobTitle} onChange={onJobChange} placeholder="---select----" class="d-inline-flex p-2 bd-highlight">
                            <option value="">---select----</option>
                            <option>Front-End Developer</option>
                            <option>Node.js Developer </option>
                            <option>MEAN stack Developer </option>
                            <option>FULL stack Developer </option>
                        </select><br />                    </div>
                </div>
                <div className="row mb-3">
                    <label for="inputEmail3" className="col-sm-2 col-form-label">experience</label>
                    <div className="col-sm-10">
                        <input style={{ width: "60%" }} type="text" onChange={onExperienceChange} value={experience} placeholder="(2years, 3months)" class="d-inline-flex p-2 bd-highlight" />
                    </div>
                </div>
                <div className="row mb-3">
                    <label for="inputEmail3" className="col-sm-2 col-form-label">Technical skills</label>
                    <div className="col-sm-10">
                        <textarea style={{ width: "60%" }} onChange={onTechChange} value={skills} placeholder="Technical skills" class="d-inline-flex p-2 bd-highlight"></textarea><br />
                    </div>
                </div>
                <button type="submit" className="btn btn-success">Send Application</button>

            </form>

        </div >
    )

}

export default JobForm