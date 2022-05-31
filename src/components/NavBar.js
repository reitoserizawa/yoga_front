import React from 'react';
import { NavLink } from 'react-router-dom'

function NavBar () {
    return (
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Yoga <i class="fa-solid fa-leaf"></i></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
    <NavLink to='/' exact>
      <li class="nav-item">
        <a class="nav-link" href="#">Schedule</a>
      </li>
    </NavLink>
    <NavLink to='/instructors' exact>
      <li class="nav-item">
        <a class="nav-link" href="#">Instructors</a>
      </li>
    </NavLink>
    <NavLink to='/form' exact>
      <li class="nav-item">
        <a class="nav-link" href="#">Create Yoga Class</a>
      </li>
    </NavLink>
    </ul>
  </div>
</nav>
    )
}

export default NavBar