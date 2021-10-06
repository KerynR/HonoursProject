import React from 'react';
import './CompanyProfile.css';
import Footer from '../Footer';
import history from '../history';



function CompanyProfile() {
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
                <button className="btnEditCompanyProfile" variant="btn btn-success" onClick={() => history.push('/EditCompanyProfile')}>Edit Profile</button>          
            </li>
                <br /><br />  
            <li>
                <button className="btnAddNewPos" variant="btn btn-success" onClick={() => history.push('/CreatePosition')}>Create Vacancy</button>          
            </li>
                <br /><br /> 
            <li>
                <button className="btnAddRecruiter" variant="btn btn-success" onClick={() => history.push('/')}>Add Recruiter</button>          
            </li>     
            <br /><br />
            <li>
                <button className="btnViewVacanciesComp" variant="btn btn-success" onClick={() => history.push('/ViewSubmissions')}>View Vacancies</button>          
            </li>          
            </ul>
        </main>

        {/* DISPLAY COMPANY DETAILS */}

        <aside className="RightCompProf">
        
            <form className="CompanyForm">

                <div className="compRow">
                    <div className="compColLeft">
                        <label>Company Name:</label>
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
                <td><a href="/VacancyInfo"></a></td>
                <td></td>
                <td><button className="btnEditPos" variant="btn btn-success" onClick={() => history.push('/EditVacancy')}>Edit</button></td>
                <td><button className="btnDeletePos" variant="btn btn-success" onClick={() => history.push('/')}>Delete</button></td>
            </tr>
            <tr>
                <td><a href="/VacancyInfo"></a></td>
                <td></td>
                <td><button className="btnEditPos" variant="btn btn-success" onClick={() => history.push('/EditVacancy')}>Edit</button></td>
                <td><button className="btnDeletePos" variant="btn btn-success" onClick={() => history.push('/')}>Delete</button></td>
            </tr>
            <tr>
                <td><a href="/VacancyInfo"></a></td>
                <td></td>
                <td><button className="btnEditPos" variant="btn btn-success" onClick={() => history.push('/EditVacancy')}>Edit</button></td>
                <td><button className="btnDeletePos" variant="btn btn-success" onClick={() => history.push('/')}>Delete</button></td>
            </tr>
            <tr>
                <td><a href="/VacancyInfo"></a></td>
                <td></td>
                <td><button className="btnEditPos" variant="btn btn-success" onClick={() => history.push('/EditVacancy')}>Edit</button></td>
                <td><button className="btnDeletePos" variant="btn btn-success" onClick={() => history.push('/')}>Delete</button></td>
            </tr>
            <tr>
                <td><a href="/VacancyInfo"></a></td>
                <td></td>
                <td><button className="btnEditPos" variant="btn btn-success" onClick={() => history.push('/EditVacancy')}>Edit</button></td>
                <td><button className="btnDeletePos" variant="btn btn-success" onClick={() => history.push('/')}>Delete</button></td>
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
                        <td><a href="/RecruiterProfile"></a></td>
                        <td><a href=""></a></td>
                        <td><a href=""></a></td>
                        <td><a href="/">Delete</a></td>
                    </tr>
                    <tr>
                        <td><a href=""></a></td>
                        <td><a href=""></a></td>
                        <td><a href=""></a></td>
                        <td><a href="/">Delete</a></td>
                    </tr>
                    <tr>
                        <td><a href=""></a></td>
                        <td><a href=""></a></td>
                        <td><a href=""></a></td>
                        <td><a href="/">Delete</a></td>
                    </tr>
                    <tr>
                        <td><a href=""></a></td>
                        <td><a href=""></a></td>
                        <td><a href=""></a></td>
                        <td><a href="/">Delete</a></td>
                    </tr>
                    <tr>
                        <td><a href=""></a></td>
                        <td><a href=""></a></td>
                        <td><a href=""></a></td>
                        <td><a href="/">Delete</a></td>
                    </tr>
                    <tr>
                        <td><a href=""></a></td>
                        <td><a href=""></a></td>
                        <td><a href=""></a></td>
                        <td><a href="/">Delete</a></td>
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
