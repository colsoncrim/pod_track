import React from 'react';
import '../styles/Navbar.css';
import { useState } from 'react';
// import { Link } from 'react-router-dom';

function Navbar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    return (
        <>
        <nav className='top-nav'>
            <a href='/' className='app-logo'>PodTrack</a>
            <button className='hamburger' onClick={() => { setIsNavExpanded(!isNavExpanded)}}>
                <i className="fas fa-bars" aria-hidden="true"></i>
            </button>
            <div className={ isNavExpanded ? 'right-nav expanded' : 'right-nav'}>
                <ul>
                    <li>
                        <a href='/search'>Sign In</a>
                    </li>
                    <li>
                        <a href='/browse'>Browse</a>
                    </li>
                    <li>
                        <a href='/mylist'>My List</a>
                    </li>
                    <li>
                        <a href='/genres'>Genres</a>
                    </li>
                </ul>
            </div>
        </nav>
        </>
    )
}

export default Navbar;