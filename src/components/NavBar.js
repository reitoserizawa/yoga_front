import React from 'react';
import { NavLink } from 'react-router-dom'

function NavBar () {
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
            <ul className="navbar-nav">
            <NavLink to='/' exact>
                <li className="nav-item active">
                <a class="navbar-brand" href="#">Yoga</a>
                </li>
            </NavLink>
        
            <NavLink to='/schedule' exact>
                <li className="nav-item active">
                <a class="navbar-brand" href="#">Schedule</a>
                </li>
            </NavLink>
            </ul>
        </div>
    </nav>
    )
}

export default NavBar