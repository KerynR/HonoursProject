import React from 'react';
import './GraduateProfile.css';
import Footer from '../Footer';

function GraduateProfile() {
  return (
    <>
    <div>
      <h1>Graduate Profile</h1>
      

        <div className="row">
            <div class="col-25">
                <label>Upload CV</label>
            </div>
            <div className="col-75">
                <input type="file" placeholder="Upload"  />
            </div>
        </div>

        <div className="row">
            <div class="col-25">
                <label>View CV</label>
            </div>
            <div className="col-75">
                <input type="file" placeholder="Upload"  />
            </div>
        </div>

      <h3>Don't have a CV? Create one using: </h3>
      <a href="https://www.coolfreecv.com/builder-creator-cv"></a>
        
      <h3>Tips for creating a good CV:</h3>
      <ul>
          <li>tip number 1</li>
          <li>tip number 2</li>
          <li>tip number 3</li>
          <li>tip number 4</li>
          <li>tip number 5</li>
      </ul>

    </div>
    <Footer/>
    </>
  );
}

export default GraduateProfile;
