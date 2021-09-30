import { Button } from 'bootstrap';
import React, { useState, useEffect } from 'react';
import '../App.css';
import './MainSection.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';



/**<img src='/images/home.png' /> */
function MainSection() {

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div className='main-container'>
      <video src='/videos/Stripe - 86435.mp4' autoPlay loop muted />
        <div className='centerHeading'>
          <h1>XYZ Recruitment Company</h1>
          <div className="centerRest">
            <h2>Bridging the gap</h2>

            <p>Welcome to XYZ! We specialise in bridging the gap between graduates and the workplace. </p>
          
          <ul>
            <li>
            <Link to='/testing' className='HomeBtns' onClick={closeMobileMenu}>
                  Login
            </Link>
            </li>
            <li>
            <Link to='/testing' className='HomeBtns' onClick={closeMobileMenu}>
                  Register
            </Link>
            </li>
          </ul>
          </div>
        </div>
    </div>
  );
}

export default MainSection;
