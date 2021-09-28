import React from 'react'
import { Link } from 'react-router-dom'

const DashboardPage = () => {
    return(
    <section>
        <h1>DashBoard Page</h1>
        <p>welcome to my dashboard.</p>

        <Link to="/posts" className="button">View Todos</Link>

    </section>)
}

export default DashboardPage