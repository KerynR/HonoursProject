import React from 'react';
import './CompanyProfile.css';
import Footer from '../../components/Footer';
import history from '../../components/history';
import { useHistory } from "react-router";

function CompanyProfile() {

    const history = useHistory();

  return (
    <>
        <div className="gridCompProf">           
            <header className="companyHeader">
                <i class="fa fa-user-circle" aria-hidden="true"></i>
                Company Profile
            </header>

        {/* TOP LEFT GRID WITH UPLOAD PFP, EDIT PROFILE, CREATE VACANCY, ADD RECRUITER, VIEW VACANCY */}

        <main className="leftGridComp"> 
            <ul>
            <li>
                <label for="pfpImage">Upload Profile Photo</label>
                <input id="pfpImage" type="file" className="profile_photo" placeholder="Click to upload profile photo" required="" capture/>
            </li>
            <br /><br />
            <li>
                <button 
                    className="btnEditCompanyProfile" 
                    onClick={() => {
                        history.push("/EditCompanyProfile");
                    }}
                    >
                        Edit Profile
                    </button>          
            </li>
                <br /><br />  
            <li>
                <button 
                    className="btnAddNewPos" 
                    onClick={() => {
                        history.push("/CreatePosition");
                    }}
                    >
                        Create Vacancy
                    </button>          
            </li>
                <br /><br /> 
            <li>
                <button 
                    className="btnAddRecruiter" 
                    onClick={() => {
                        history.push("/");
                    }}
                    >
                        Add Recruiter
                    </button>          
            </li>     
            <br /><br />
            <li>
                <button 
                    className="btnViewVacanciesComp" 
                    onClick={() => {
                        history.push("/Vacancies");
                    }}
                    >
                        View Vacancies
                    </button>          
            </li>          
            </ul>
        </main>

        {/* DISPLAY COMPANY DETAILS */}

        <aside className="RightCompProf">
        
            <form className="CompanyForm">

                <div className="compRow">
                    <div className="compColLeft">
                        <label>Name:</label>
                    </div>
                    <div className="compColRight">
                        <label></label>
                    </div>
                </div>

                <div className="compRow">
                    <div className="compColLeft">
                        <label>Sector:</label>
                    </div>
                    <div className="compColRight">
                        <label></label>
                    </div>
                </div>

                <div className="compRow">
                    <div className="compColLeft">
                        <label>Vision:</label>
                    </div>
                    <div className="compColRight">
                        <label></label>
                    </div>
                </div>
                <div className="compRow">
                    <div className="compColLeft">
                        <label>Mission:</label>
                    </div>
                    <div className="compColRight">
                        <label></label>
                    </div>
                </div>        
                <button 
                    className="btnLogoutComp" 
                    onClick={() => history.push('/')}
                    >
                        Logout
                </button>     
            </form>
        </aside>
        
        {/* SHOW ALL CURRENT POSITIONS AVAILABLE */}

        <div className="availPosHeading">
            <h2>Current Positions Available</h2>
        </div>
        <div className="tblActiveApplications">
        <table className="tblCompPos">
            <tr>
                <th>Job Title</th>
                <th>Application Closing Date</th>
                <th>Edit Position</th>
                <th>Remove Position</th>
            </tr>
            <tr>
               
            </tr>
            <tr>
                
            </tr>
            <tr>
               
            </tr>
            <tr>
               
            </tr>
            <tr>
                
            </tr>
        </table>
        </div>

        {/* CURRENT COMPANY REPRESENTATIVES */}

        <div className="compRepHeading">
            <h2>Company Representatives</h2>
        </div>
        <div className="bottomSectComp">
            <table className="tblCompPos">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Email</th>
                        <th>Remove Representative</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        
                    </tr>
                    <tr>
                        
                    </tr>
                    <tr>
                       
                    </tr>
                    <tr>
                       
                    </tr>
                    <tr>
                        
                    </tr>
                    <tr>
                        
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

        <Footer/>
    </>
  );
}

export default CompanyProfile;
