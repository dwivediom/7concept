import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
    <div className="nav-wrapper">
      <Link to="/7concept" class="brand-logo">Logo</Link>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><Link to="/">Usestate</Link></li>
        <li><Link to="/usereducer">useReducer</Link></li>
        <li><Link to="collapsible.html">JavaScript</Link></li>
      </ul>
    </div>
  </nav>
  )
}

export default Navbar