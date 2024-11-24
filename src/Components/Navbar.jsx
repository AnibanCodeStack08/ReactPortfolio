import React from 'react';
// import logo from '../assets/Logo.png';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header>
      <nav>
        {/* <div className="left">
          <Link to="/">
            <img src={logo} alt="Anirban's Logo" />
          </Link>
        </div> */}
        <div className="right">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
