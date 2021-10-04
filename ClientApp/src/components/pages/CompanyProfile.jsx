import React from 'react';
import './CompanyProfile.css';
import MainSection from '../MainSection';
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
        <main className="leftGridComp"> 
            <ul>
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
        
        <div className="compRepHeading">
            <h2>Company Representatives</h2>
        </div>
        <div className="bottomSectComp">
            <table className="tblCompPos">
                <tr>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Email</th>
                    <th>Remove Representative</th>
                </tr>
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
            </table>
        </div>
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
                <td><a href="/EditVacancy">Edit</a></td>
                <td><a href="/">Delete</a></td>
            </tr>
            <tr>
                <td><a href="/VacancyInfo"></a></td>
                <td></td>
                <td><a href="/EditVacancy">Edit</a></td>
                <td><a href="/">Delete</a></td>
            </tr>
            <tr>
                <td><a href="/VacancyInfo"></a></td>
                <td></td>
                <td><a href="/EditVacancy">Edit</a></td>
                <td><a href="/">Delete</a></td>
            </tr>
            <tr>
                <td><a href="/VacancyInfo"></a></td>
                <td></td>
                <td><a href="/EditVacancy">Edit</a></td>
                <td><a href="/">Delete</a></td>
            </tr>
            <tr>
                <td><a href="/VacancyInfo"></a></td>
                <td></td>
                <td><a href="/EditVacancy">Edit</a></td>
                <td><a href="/">Delete</a></td>
            </tr>
        </table>
        </div>
    </div>

        <Footer/>
    </>
  );
}

export default CompanyProfile;
