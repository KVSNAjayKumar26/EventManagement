import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (

    <header className='header'>
        <h1>Event Management System</h1>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/events">Events</Link>
            <Link to="/register">Register</Link>
        </nav>
    </header>
  
);

export default Header;