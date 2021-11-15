import React from 'react'

const Pagination = (props) => {
    const { usersPerPage, totalUsers, paginate } = props

    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map((number) => {
                    return (
                        <li key={number} className="page-item">
                            <a onClick={() => paginate(number)} href="/userContainer/!#" className="page-link">
                                {number}
                            </a>
                        </li>
                    )

                })}

            </ul>

        </nav>
    )


}

export default Pagination

