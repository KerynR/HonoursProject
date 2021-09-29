import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

/* Nav Bar adjusts according to screen size*/
  const showButton = () => {
    if(window.innerWidth <= 960){
      setButton(false);
    } else{
      setButton(true);
    }
  };

/*Stop signup button from being dumb*/
  useEffect(() => {
    showButton()
  },[]);

  /*------------------------------------------*/

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to="/" className='navbar-logo' onClick ={closeMobileMenu}>
            XYZ Recruitment
            <i class="fa fa-graduation-cap" aria-hidden="true"></i>
          </Link>
            <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='./About' className='nav-links' onClick={closeMobileMenu}>
                  About
                </Link>
              </li>
              <li className='nav-item'>
                  <Link to='/Contact' className='nav-links' onClick={closeMobileMenu}>
                    Contact
                  </Link>
              </li>
              <li className='nav-item'>
                <Link to='/testing' className='nav-links' onClick={closeMobileMenu}>
                  Register
                </Link>
              </li>
              
            </ul>
            
            
        </div>
      </nav>
    </>
  );
}

export default Navbar;
