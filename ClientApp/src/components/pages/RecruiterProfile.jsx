import React from 'react';
import './RecruiterProfile.css';
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
          <li>
            <button className="btnEditRecProfile" variant="btn btn-success" onClick={() => history.push('/')}>Edit Profile</button>          
          </li>
          <br />                
          <li>
            <button className="btnDeleteRecProf" variant="btn btn-success" onClick="confirmDelete()">Delete Profile</button>          
          </li>
          <br />
          <li>
            <button className="btnViewVacancies" variant="btn btn-success" onClick={() => history.push('/Vacancies')}>View Vacancies</button>          
          </li>
          <br />  
          <li>
            <button className="btnAddNewPos" variant="btn btn-success" onClick={() => history.push('/CreatePosition')}>Create Vacancy</button>          
          </li>
        </ul>
        </main>
        <aside className="rightRecruiterProf">
        
        <form className="RecruitersForm">

            <div className="recRow">
                <div className="colLeft">
                    <label>First Name:</label>
                </div>
                <div className="colRight">
                    <label></label>
                </div>
            </div>

            <div className="recRow">
                <div className="colLeft">
                    <label>Second Name:</label>
                </div>
                <div className="colRight">
                    <label></label>
                </div>
            </div>

            <div className="recRow">
                <div className="colLeft">
                    <label>Email:</label>
                </div>
                <div className="colRight">
                    <label></label>
                </div>
            </div>
            <div className="recRow">
                <div className="colLeft">
                    <label>Mobile:</label>
                </div>
                <div className="colRight">
                    <label></label>
                </div>
            </div>
            <div className="recRow">
                <div className="colLeft">
                    <label>Gender:</label>
                </div>
                <div className="colRight">
                    <label></label>
                </div>
            </div>
            <div className="recRow">
                <div className="colLeft">
                    <label>Company Representing:</label>
                </div>
                <div className="colRight">
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
