import React from 'react';
import '../App.css';
import './MainSection.css';

function MainSection() {
  return (
    <div className='main-container'>
      <img src='/images/home.png' />
        <div className='centerHeading'>
          <h1>XYZ Recruitment Company</h1>
          <div className="centerRest">
            <h2>Bridging the gap</h2>

            <p>Welcome to XYZ! We specialise in bridging the gap between graduates and the workplace. </p>
          </div>
        </div>
    </div>
  );
}

export default MainSection;
