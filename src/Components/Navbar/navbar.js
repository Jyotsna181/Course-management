import React from "react";
import {Link} from "react-router-dom";
import './navbar.css'

function Navbar() {
  
 return (
    <div className="container">
        <header>
            <a href="#" className="logo">Smart<span>Study</span></a>
            <div id="menu" className="fa-solid fa-bars"></div>
            <nav className="navbar">
                <Link to="/" className="link">Home</Link>
                <Link to="/course" className="link">Courses</Link>
                <Link to="/teacher" className="link">Teachers</Link>
            </nav>
        </header>
    </div>
  );
}

export default Navbar;
