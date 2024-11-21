import React from 'react';
import logo from '../assets/Logo.png';

function Navbar() {
  return (
    <>
      <header>
        <nav>
          <div className='left'>
            <img src={logo} alt="Anirban's Logo"/>
          </div>
          <div className='right'>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/">About</a></li>
              <li><a href="/">Projects</a></li>
              <li><a href="/">Contact</a></li>
            </ul>
          </div>
        </nav>
      </header> 
    </>
  );
}

export default Navbar;
