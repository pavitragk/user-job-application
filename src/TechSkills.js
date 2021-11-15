import React, { useState, useEffect } from 'react'

const TechSkills = (props) => {
    const { handleNode, handleFront, handleMean, handleStack } = props

    return (
        <div>
            <div class="d-grid gap-4 d-md-flex">
                <button type="button" class="btn btn-primary" onClick={handleFront} >Front-End Developer</button>
                <button type="button" class="btn btn-secondary" onClick={handleNode}>Node.js Developer</button>
                <button type="button" class="btn btn-success" onClick={handleMean} >MEAN Stack Developer</button>
                <button type="button" class="btn btn-danger" onClick={handleStack}>Full Stack Developer</button>

            </div>

        </div >

    )
}

export default TechSkills