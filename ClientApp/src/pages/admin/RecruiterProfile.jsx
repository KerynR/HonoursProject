import React, { useState } from 'react';
import './RecruiterProfile.css';
import Footer from '../../components/Footer';
import ReactDom from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import { useHistory } from "react-router";


import axios, { Axios } from 'axios';

function confirmDelete(){
    var result = window.confirm("Are you sure you want to delete?");
    if(result){
        //delete logic here
    }
}


const apiUrl='https://localhost:44347/api/';
const http = axios;

function RecruiterProfile() {

    const history = useHistory();
    const[firstName,setFirstName] = useState(localStorage.getItem("firstName"))
    const[lastName,setLastName] = useState(localStorage.getItem("lastName"))
    const[email,setEmail] = useState(localStorage.getItem("email"))
    const[mobile,setMobile] = useState(localStorage.getItem("mobile"))
    const[gender,setGender] = useState(localStorage.getItem("gender"))
    const[company,setCompanyName] = useState("TransformIT")
  return (
    <>
      <div className="gridRecruiterProf">
        <header className="gradRecruiterHeader">
        <i class="fa fa-user-circle" aria-hidden="true"></i>
        Recruiter Profile
        </header>
       
        <aside className="rightRecruiterProf">
        
        <form className="RecruitersForm">

            <div className="recRow">
                <div className="colLeftRecProf">
                    <label>Name:</label>
                </div>
                <div className="colRightRecProf">
                    <label>{firstName}</label>
                </div>
            </div>

            <div className="recRow">
                <div className="colLeftRecProf">
                    <label>Surname:</label>
                </div>
                <div className="colRightRecProf">
                    <label>{lastName}</label>
                </div>
            </div>

            <div className="recRow">
                <div className="colLeftRecProf">
                    <label>Email:</label>
                </div>
                <div className="colRightRecProf">
                    <label>{email}</label>
                </div>
            </div>
            <div className="recRow">
                <div className="colLeftRecProf">
                    <label>Mobile:</label>
                </div>
                <div className="colRightRecProf">
                    <label>{mobile}</label>
                </div>
            </div>
            <div className="recRow">
                <div className="colLeftRecProf">
                    <label>Gender:</label>
                </div>
                <div className="colRightRecProf">
                    <label>{gender}</label>
                </div>
            </div>
            <div className="recRow">
                <div className="colLeftRecProf">
                    <label>Company:</label>
                </div>
                <div className="colRightRecProf">
                    <label>{company}<a href="/CompanyProfile"></a></label>
                </div>
            </div>

            <ul>
            <li>
                <button className="btnEditRecProfile" variant="btn btn-success" onClick={() => history.push('/EditRecruiterProfile')}>Edit Profile</button>          
            </li>
          <br />  
            <button 
                    className="btnLogoutRec" 
                    onClick={() => history.push('/')}
                    >
                        Logout
            </button>  

            </ul>
        </form>
        </aside>

        <div className="leftRecruiterProf">
        <ul>
          <li><label>Upload Profile Photo:</label></li><br /><input type="file" placeholder="Upload"  />
          <br /><br />  
                       
          <li>
            <button className="btnViewVacRec" variant="btn btn-success" onClick={() => history.push('/Vacancies')}>View Vacancies</button>          
          </li>
          <br />  
          <li>
            <button className="btnAddNewPosRec" variant="btn btn-success" onClick={() => history.push('/CreatePosition')}>Create Vacancy</button>          
          </li>
        </ul>
        </div>
        
      </div>
      <Footer/>
    </>
  );
}

export default RecruiterProfile;
