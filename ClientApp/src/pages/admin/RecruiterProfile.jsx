import React from 'react';
import './RecruiterProfile.css';
import Footer from '../../components/Footer';
import ReactDom from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import history from '../../components/history';

function confirmDelete(){
    var result = window.confirm("Are you sure you want to delete?");
    if(result){
        //delete logic here
    }
}

function RecruiterProfile() {
  return (
    <>
      <div className="gridRecruiterProf">
        <header className="gradRecruiterHeader">
        <i class="fa fa-user-circle" aria-hidden="true"></i>
        Recruiter Profile
        </header>
        <main className="leftRecruiterProf">
        <ul>
          <li>Upload Profile Photo:</li><br /><input type="file" placeholder="Upload"  />
          <br /><br />  
          <li>
            <button className="btnEditRecProfile" variant="btn btn-success" onClick={() => history.push('/EditRecruiterProfile')}>Edit Profile</button>          
          </li>
          <br />                
          <li>
            <button className="btnViewVacancies" variant="btn btn-success" onClick={() => history.push('/Vacancies')}>View Vacancies</button>          
          </li>
          <br />  
          <li>
            <button className="btnAddNewPosRec" variant="btn btn-success" onClick={() => history.push('/CreatePosition')}>Create Vacancy</button>          
          </li>
        </ul>
        </main>
        <aside className="rightRecruiterProf">
        
        <form className="RecruitersForm">

            <div className="recRow">
                <div className="colLeftRecProf">
                    <label>Name:</label>
                </div>
                <div className="colRightRecProf">
                    <label></label>
                </div>
            </div>

            <div className="recRow">
                <div className="colLeftRecProf">
                    <label>Surname:</label>
                </div>
                <div className="colRightRecProf">
                    <label></label>
                </div>
            </div>

            <div className="recRow">
                <div className="colLeftRecProf">
                    <label>Email:</label>
                </div>
                <div className="colRightRecProf">
                    <label></label>
                </div>
            </div>
            <div className="recRow">
                <div className="colLeftRecProf">
                    <label>Mobile:</label>
                </div>
                <div className="colRightRecProf">
                    <label></label>
                </div>
            </div>
            <div className="recRow">
                <div className="colLeftRecProf">
                    <label>Gender:</label>
                </div>
                <div className="colRightRecProf">
                    <label></label>
                </div>
            </div>
            <div className="recRow">
                <div className="colLeftRecProf">
                    <label>Company Representing:</label>
                </div>
                <div className="colRightRecProf">
                    <label><a href="/CompanyProfile"></a></label>
                </div>
            </div>


        </form>
        

        </aside>
        
      </div>
      <Footer/>
    </>
  );
}

export default RecruiterProfile;
