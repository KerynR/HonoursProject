import React from 'react';
import './GraduateProfile.css';
import Footer from '../Footer';

function GraduateProfile() {
  return (
    <>
    <div className="gridGradProf">
      <header className="gradProfHeader">Graduate Profile</header>
      <main className="leftGradProf">
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
      </main>

    <aside className="rightGradProf">
      <h3>Top 5 Tips for Creating a CV:</h3>
      <ul>
          <li>Include two forms of contact, email and mobile</li>
          <li>Don’t include acronyms or organisation related terminology</li>
          <li>Explain any gaps in your CV, and be sure to highlight the skills that you have developed</li>
          <li>Use the right ‘keywords’ to ensure your CV is picked up in word searches</li>
          <li>Spelling and grammar check</li>
      </ul>
    </aside>
    </div>
    <Footer/>
    </>
  );
}

export default GraduateProfile;
