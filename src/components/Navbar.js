import React from 'react';
import logo from "../assets/logo.svg";

export default function Navbar() {
    return (
        <nav className="navbar">
            <img className='nav-img' src={logo} alt="/" />
            <header className="navbar-brand">
                Meme Generator</header>

            <div className="" id="navbarNav">
                <h4 className="course ">Take a break, and laugh</h4>
            </div>
        </nav>
    );
}
