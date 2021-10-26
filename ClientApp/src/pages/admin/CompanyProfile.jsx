import React,{useState, useEffect} from 'react';
import './CompanyProfile.css';
import Footer from '../../components/Footer';
import history from '../../components/history';
import { useHistory } from "react-router";
import axios, { Axios } from 'axios';
import { holdReady } from 'jquery';

const http = axios;


const apiUrl='https://localhost:44347/api/'
function CompanyProfile() {

    const history = useHistory();
    const [name,setCompanyName]=useState(localStorage.getItem("companyName"));
    const [sector,setCompanySector]=useState(localStorage.getItem("sector"));
    const [vision,setVision]=useState(localStorage.getItem("vision"));
    const [mission,setMission]=useState(localStorage.getItem("mission"));
    const [companyReps,setCompanyReps]=useState(null)
    const [vacancies,setVacancies] = useState(null);
    const[loading,setLoading]=useState(true);
    
    function editPosition(vacancyId){
        localStorage.setItem("vacancyId",vacancyId)
        history.push("/EditVacancy")
    }
    function deleteVacancy(vacancyId){
        http.put(`${apiUrl}Company/Vacancy/DeletePosition/${vacancyId}`).then((response)=>{
            history.push("/CompanyProfile")
        })
    }

    function deleteRep(rep){
        http.delete(`${apiUrl}Company/RemoveCompanyRep/${rep.repId}`).then((response)=>{
            history.push("/CompanyProfile")
        })
        debugger
    }

    useEffect (() =>{
        try{
          http.get(`${apiUrl}Company/GetCompSpecificReps/${localStorage.getItem("companyId")}`).then((response)=>{
            setCompanyReps(response.data)
            http.get(`${apiUrl}/Vacancy/Company//${localStorage.getItem("companyId")}`).then((response)=>{
                    setVacancies(response.data);
        
            
            }).finally(()=>{
                setLoading(false);
            })
          })
          
        }
        catch(error){
          alert(error.message)
        }
      },[])

    if(loading){
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
                                history.push("/SignUp");
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
                                <label>{name}</label>
                            </div>
                        </div>

                        <div className="compRow">
                            <div className="compColLeft">
                                <label>Sector:</label>
                            </div>
                            <div className="compColRight">
                                <label>{sector}</label>
                            </div>
                        </div>

                        <div className="compRow">
                            <div className="compColLeft">
                                <label>Vision:</label>
                            </div>
                            <div className="compColRight">
                                <label>{vision}</label>
                            </div>
                        </div>
                        <div className="compRow">
                            <div className="compColLeft">
                                <label>Mission:</label>
                            </div>
                            <div className="compColRight">
                                <label>{mission}</label>
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

                <div className="dropdown">
                    <label>DropDown</label>
                    <select name="cars" id="cars">
                        <option value="value1">Value1</option>
                        <option value="value2">Value2</option>
                        <option value="value3">Value2</option>
                        <option value="value4">Value2</option>
                    </select>
                </div>
                
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
    else if(vacancies == null){
        return (
            <>
                <div className="gridCompProf">           
                    <header className="companyHeader">
                        <i class="fa fa-user-circle" aria-hidden="true"></i>
                        Company Profile
                    </header>

                {/* TOP LEFT GRID WITH UPLOAD PFP, EDIT PROFILE, CREATE VACANCY, ADD RECRUITER, VIEW VACANCY */}



                {/* DISPLAY COMPANY DETAILS */}

                <aside className="RightCompProf">
                
                    <form className="CompanyForm">

                        <div className="compRow">
                            <div className="compColLeft">
                                <label>Name:</label>
                            </div>
                            <div className="compColRight">
                                <label>{name}</label>
                            </div>
                        </div>

                        <div className="compRow">
                            <div className="compColLeft">
                                <label>Sector:</label>
                            </div>
                            <div className="compColRight">
                                <label>{sector}</label>
                            </div>
                        </div>

                        <div className="compRow">
                            <div className="compColLeft">
                                <label>Vision:</label>
                            </div>
                            <div className="compColRight">
                                <label>{vision}</label>
                            </div>
                        </div>
                        <div className="compRow">
                            <div className="compColLeft">
                                <label>Mission:</label>
                            </div>
                            <div className="compColRight">
                                <label>{mission}</label>
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

                <main className="leftGridComp"> 
                    <ul>
                    <li>
                        <label for="pfpImage">Upload Profile Photo</label>
                        <input id="pfpImage" type="file" className="profile_photo" placeholder="Click to upload profile photo" required="" capture/>
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
                                history.push("/SignUp");
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
                    <br /><br />
                    <li>
                        <button 
                            className="btnViewSubmissions" 
                            onClick={() => {
                                history.push("/ViewSubmissions");
                            }}
                            >
                                View Submissions
                        </button>          
                    </li>               
                    </ul>
                </main>
                
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
                    <tbody>
                        <tr></tr>
                    </tbody>
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
                        {
                            companyReps.map((rep) =>{
                            return (
                                <tr >
                                <td>{rep.repFirstName}</td>
                                <td>{rep.repLastName}</td>
                                <td>{rep.email}</td>
                                <td><button type="button" onClick={()=>{deleteRep(rep)}}>Delete</button></td>
                                </tr>
                            )
                            })
                        }
                        </tbody>
                    </table>
                </div>
            </div>

                <Footer/>
            </>
        );
    }
    else{
        return (
            <>
                <div className="gridCompProf">           
                    <header className="companyHeader">
                        <i class="fa fa-user-circle" aria-hidden="true"></i>
                        Company Profile
                    </header>

                {/* TOP LEFT GRID WITH UPLOAD PFP, EDIT PROFILE, CREATE VACANCY, ADD RECRUITER, VIEW VACANCY */}

                

                {/* DISPLAY COMPANY DETAILS */}

                <aside className="RightCompProf">
                
                    <form className="CompanyForm">

                        <div className="compRow">
                            <div className="compColLeft">
                                <label>Name:</label>
                            </div>
                            <div className="compColRight">
                                <label>{name}</label>
                            </div>
                        </div>

                        <div className="compRow">
                            <div className="compColLeft">
                                <label>Sector:</label>
                            </div>
                            <div className="compColRight">
                                <label>{sector}</label>
                            </div>
                        </div>

                        <div className="compRow">
                            <div className="compColLeft">
                                <label>Vision:</label>
                            </div>
                            <div className="compColRight">
                                <label>{vision}</label>
                            </div>
                        </div>
                        <div className="compRow">
                            <div className="compColLeft">
                                <label>Mission:</label>
                            </div>
                            <div className="compColRight">
                                <label>{mission}</label>
                            </div>
                        </div>    
                    <ul>
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
                                className="btnLogoutComp" 
                                onClick={() => history.push('/')}
                                >
                                    Logout
                            </button> 
                        </li>
                    </ul>    
                    </form>
                </aside>

                <main className="leftGridComp"> 
                    <ul>
                    <li>
                        <label for="pfpImage">Upload Profile Photo</label><br />
                        <input id="pfpImage" type="file" className="profile_photo" placeholder="Click to upload profile photo" required="" capture/>
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
                    <br /><br />      
                    <li>
                        <button 
                            className="btnViewSubmissions" 
                            onClick={() => {
                                history.push("/ViewSubmissions");
                            }}
                            >
                                View Submissions
                            </button>          
                    </li>          
                    </ul>
                </main>
                
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
                    <tbody>
                    {
                            vacancies.map((position) =>{
                            return (
                                <tr >
                                <td>{position.jobTitle}</td>
                                <td>{position.applicationClosingDate}</td>
                                <td><button className="btnCurrentPosTbl" type="button" onClick={()=>{editPosition(position.vacancyId)}}>Edit</button></td>
                                <td><button className="btnCurrentPosTbl" type="button" onClick={()=>{deleteVacancy(position.vacancyId)}}>Delete</button></td>
                                </tr>
                            )
                            })
                        }
                    </tbody>
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
                        {
                            companyReps.map((rep) =>{
                            return (
                                <tr >
                                <td>{rep.repFirstName}</td>
                                <td>{rep.repLastName}</td>
                                <td>{rep.email}</td>
                                <td><button className="btnCurrentPosTbl" type="button" onClick={()=>{deleteRep(rep)}}>Delete</button></td>
                                </tr>
                            )
                            })
                        }
                        </tbody>
                    </table>
                </div>
            </div>

                <Footer/>
            </>
        );
    }
}

export default CompanyProfile;
