import React from 'react';
import './GraduateProfile.css';
import MainSection from '../MainSection';
import Footer from '../Footer';
import ReactDom from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import history from '../history';

function confirmDelete(){
  var result = window.confirm("Are you sure you want to delete?");
  if(result){
      //delete logic here
  }
}

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
          
          <li>Upload Certificates:</li><br /><input type="file" placeholder="Upload"  />
          <br /><br />
          <li>
          <button className="btnEditProfile" variant="btn btn-success" onClick={() => history.push('/EditProfile')}>Edit Profile</button>          
          </li>
          <br />        
          <li>
          <button className="btnMoocs" variant="btn btn-success" onClick={() => history.push('/Moocs')}>View MOOCs</button>          
          </li>
          <br />
          <li>
          <button className="btnViewCV" variant="btn btn-success" onClick={() => history.push('/')}>View CV</button>          
          </li>
          <br />
          <li>
          <button className="btnViewSubmissions" variant="btn btn-success" onClick={() => history.push('/ViewSubmissions')}>View Submissions</button>          
          </li>
         
        </ul>
        </main>
        <aside className="rightGradProf">

        <form className="GraduateForm">

          <div className="gradRow">
              <div className="colLeft">
                  <label>Name:</label>
              </div>
              <div className="colRight">
                  <label>___________</label>
              </div>
          </div>

          <div className="gradRow">
              <div className="colLeft">
                  <label>Surname:</label>
              </div>
              <div className="colRight">
                  <label>___________</label>
              </div>
          </div>

          <div className="gradRow">
              <div className="colLeft">
                  <label>Email:</label>
              </div>
              <div className="colRight">
                  <label>___________</label>
              </div>
          </div>
          <div className="gradRow">
              <div className="colLeft">
                  <label>Contact:</label>
              </div>
              <div className="colRight">
                  <label>___________</label>
              </div>
          </div>
          <div className="gradRow">
              <div className="colLeft">
                  <label>Company Representing:</label>
              </div>
              <div className="colRight">
                  <label>___________</label>
              </div>
          </div>

          <ul className="cvTips">
                  <h2 className="cvTipsh2">Top 5 Tips for Creating a CV:</h2><br /><br />
                    <li>Include two forms of contact, email and mobile</li><br />
                    <li>Don’t include acronyms or organisation related terminology</li><br />
                    <li>Explain any gaps in your CV & be sure to highlight the skills that you have developed</li><br />
                    <li>Use the right ‘keywords’ to ensure your CV is picked up in word searches</li><br />
                    <li>Spelling and grammar check</li>
                </ul>

</form>
        
        

        </aside>
        
      </div>
      <Footer/>
    </>
  );
}

export default GraduateProfile;
