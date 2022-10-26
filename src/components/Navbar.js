import React, { Component } from 'react'
import {Link} from 'react-router-dom';

// import App from '../App'

const Navbar = ({ handleLogout }) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand text-light" to="/">NewsMeds</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link text-light" aria-current="page" to="/">Home</Link>
                            </li>
                            <li classname="nav-item "> <Link className="nav-link text-light" to="/about">Business</Link> </li>
                            <li classname="nav-item"> <Link className="nav-link text-light" to="/Entertainment">Entertainment</Link></li>
                            <li classname="nav-item"> <Link className="nav-link text-light" to="/General">General</Link></li>
                            <li classname="nav-item"> <Link className="nav-link text-light" to="/Health">Health</Link></li>
                            <li classname="nav-item"> <Link className="nav-link text-light" to="/Science">Science</Link></li>
                            <li classname="nav-item"> <Link className="nav-link text-light" to="/Sports">Sports</Link></li>
                            <li classname="nav-item"> <Link className="nav-link text-light" to="/Technology">Technology</Link></li>
                        </ul>
                        <form className="d-flex" role="search">
                            <button className="btn btn-outline-success" onClick={handleLogout}>Logout</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar;
