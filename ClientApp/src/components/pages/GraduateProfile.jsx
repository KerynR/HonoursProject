import React from 'react';
import './GraduateProfile.css';
import MainSection from '../MainSection';
import Footer from '../Footer';
import ReactDom from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import history from '../history';


function GraduateProfile() {
  return (
    <>
      <div className="gridGradProf">
        <header className="gradProfHeader">
        <i class="fa fa-user-circle" aria-hidden="true"></i>
        Graduate Profile
        </header>
        <main className="leftGradProf">
        <ul>
          <li>Upload CV:</li><br /><input type="file" placeholder="Upload"  />
          <br /><br />          
          <li>
          <button className="btnMoocs" variant="btn btn-success" onClick={() => history.push('/Moocs')}>View MOOCs</button>          
          </li>
          <br />
          <li>
          <button className="btnViewVacancies" variant="btn btn-success" onClick={() => history.push('/Vacancies')}>View Job Vacancies</button>          
          </li>
          <br />
          <li>
          <button className="btnViewVacancies" variant="btn btn-success" onClick={() => history.push('/ViewSubmissions')}>View Submissions</button>          
          </li>
        </ul>
        </main>
        <aside className="rightGradProf">
        
        <ul className="cvTips">
        <h2 className="cvTipsh2">Top 5 Tips for Creating a CV:</h2><br /><br />
          <li>Include two forms of contact, email and mobile</li><br />
          <li>Don’t include acronyms or organisation related terminology</li><br />
          <li>Explain any gaps in your CV & be sure to highlight the skills that you have developed</li><br />
          <li>Use the right ‘keywords’ to ensure your CV is picked up in word searches</li><br />
          <li>Spelling and grammar check</li>
      </ul>

        </aside>
        
      </div>
      <Footer/>
    </>
  );
}

export default GraduateProfile;
