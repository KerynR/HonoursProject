import React from 'react';
import './GraduateProfile.css';
import Footer from '../../components/Footer';
import 'bootstrap/dist/css/bootstrap.css';
import history from '../../components/history';



{/* GRADUATES CURRENT APPLICATIONS - THIS PAGE OPENS WHEN THE GRADUATE CLICKS ON THE JOB TITLE */}

function GraduateProfile() {
  return (
    <>
      <div className="gridGradProf">
        <header className="gradProfHeader">
            <i class="fa fa-user-circle" aria-hidden="true"></i>
            Graduate Profile
        </header>
        <main className="leftGradProf">

           {/** ONLY VISIBLE TO GRADUATE WHOSE PROFILE IT IS */} 
        <ul>

          <li>Upload Profile Photo:</li><br /><input type="file" placeholder="Upload"  />
          <br /><br />  

          <li>Upload CV:</li><br /><input type="file" placeholder="Upload"  />
          <br /><br />  
          
          <li>Upload Certificates:</li><br /><input type="file" placeholder="Upload"  />
          <br /><br />
          <li>
          <button className="btnEditProfile" variant="btn btn-success" onClick={() => history.push('/EditGradProfile')}>Edit Profile</button>          
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
          <button className="btnViewVacancies" variant="btn btn-success" onClick={() => history.push('/Vacancies')}>View Vacancies</button>          
          </li>
         
        </ul>
        </main>
        <aside className="rightGradProf">

            {/** VISIBLE TO EVERYONE */} 

        <form className="GraduateForm">

          <div className="gradRow">
              <div className="colLeftGrad">
                  <label className="lblGradName">Name:</label>
              </div>
              <div className="colRightGrad">
                  <label className=""></label>
              </div>
          </div>

          <div className="gradRow">
              <div className="colLeftGrad">
                  <label className="lblGradSurname">Surname:</label>
              </div>
              <div className="colRightGrad">
                  <label className=""></label>
              </div>
          </div>

          <div className="gradRow">
              <div className="colLeftGrad">
                  <label className="lblGradEmail">Email:</label>
              </div>
              <div className="colRightGrad">
                  <label className=""></label>
              </div>
          </div>
          <div className="gradRow">
              <div className="colLeftGrad">
                  <label className="lblGradContact">Contact:</label>
              </div>
              <div className="colRightGrad">
                  <label className=""></label>
              </div>
          </div>
          <div className="gradRow">
              <div className="colLeftGrad">
                  <label className="lblGradGender">Gender:</label>
              </div>
              <div className="colRightGrad">
                  <label className=""></label>
              </div>
          </div>
          <div className="gradRow">
              <div className="colLeftGrad">
                  <label className="lblGradCompRep">Company Representing:</label>
              </div>
              <div className="colRightGrad">
                  <label className=""></label>
              </div>
          </div>
        </form>
        </aside>
        <div className="currentApplicationsHeader">
            <h1>Current Applications</h1>
        </div>
        <div className="currentApplications">
            <table className="currAppTbl">
                <thead>
                    <tr>
                        <th>Job Title</th>
                        <th>Application Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><a href="/gradSubmissions"></a></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td><a href="/gradSubmissions"></a></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td><a href="/gradSubmissions"></a></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td><a href="/gradSubmissions"></a></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td><a href="/gradSubmissions"></a></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className="gradBottom">
                    <ul className="cvTips">
                        <h2 className="cvTipsh2">Top 5 Tips for Creating a CV:</h2><br /><br />
                            <li>Include two forms of contact, email and mobile</li><br />
                            <li>Don’t include acronyms or organisation related terminology</li><br />
                            <li>Explain any gaps in your CV & be sure to highlight the skills that you have developed</li><br />
                            <li>Use the right ‘keywords’ to ensure your CV is picked up in word searches</li><br />
                            <li>Spelling and grammar check</li>
                    </ul>
                </div>
        </div>
      <Footer/>
    </>
  );
}

export default GraduateProfile;
