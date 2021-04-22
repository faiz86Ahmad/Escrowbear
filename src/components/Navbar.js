import React from 'react';
import {Link} from "react-router-dom"

const Navbar = () => {
    return (
        <div className="header">
        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
  <Link className="navbar-brand" to="/">EscrowBear</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/aboutus">AboutUs</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/login">Login</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/signup">Signup</Link>
      </li>
      
    </ul>
    
  </div>
</nav>
            
        </div>
        </div>
    )
}

export default Navbar;
