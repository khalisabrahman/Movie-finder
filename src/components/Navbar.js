import React from 'react';
import { Link } from 'react-router-dom'

export const Navbar = () => {
  

    return (
        <div className='flex'>
            <h1 className='container--pall logo'>Movie Finder</h1>
            <Link to="/about">About</Link>
            <Link to="/">Home</Link>
        </div>
    )
}


