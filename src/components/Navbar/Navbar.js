import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div classNameName="">
            <nav className="navbar navbar-expand-sm bg-light">
<ul className="navbar-nav">
  <li className="nav-item">
    <Link className="nav-link" href="#" to="/home">Home</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" href="#" to="/online">About</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" href="#" to="/vocabulary">Contact</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" href="#" to="/grammar">Socials</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" href="#" to="/skill">Email</Link>
  </li>
</ul>
</nav>
</div>
    );
};

export default Navbar;