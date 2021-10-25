import { Button } from './Button';
import React, { useState, useEffect } from 'react';
import '../App.css';
import './MainSection.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import history from './history';
import 'bootstrap/dist/css/bootstrap.css';

function MainSection() {

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div className='main-container'>
      {/*<video src='/videos/Black-1.mp4' autoPlay loop muted />*/}
        <div className='centerHeading'>
          <h1>XYZ Recruitment Company</h1>
          <div className="centerRest">
            <h2>Bridging the gap</h2>

            <p>Welcome to XYZ! We specialise in bridging the gap between graduates and the workplace. </p>
          <br/>
          <ul>
            <li>
            <Button 
              className="btnRegisterHome" 
              buttonStyle="btn--outline"
              buttonSize="btn--large"
              >
                Register
              </Button>
            </li>
           
          </ul>
          </div>
        </div>
    </div>
  );
}

export default MainSection;
