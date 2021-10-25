import React, {useState, useEffect} from 'react';
import './GraduateProfile.css';
import Footer from '../../components/Footer';
import 'bootstrap/dist/css/bootstrap.css';
import history from '../../components/history';
import { useHistory } from "react-router";

import * as author from "firebase/auth";
import {firebase} from "../../firebase-config"
import { auth } from '../../firebase-config';
import axios, { Axios } from 'axios';


const apiUrl='https://localhost:44347/api/';
const http = axios;

{/* GRADUATES CURRENT APPLICATIONS - THIS PAGE OPENS WHEN THE GRADUATE CLICKS ON THE JOB TITLE */}

function GraduateProfile() {
    const history = useHistory();

    const [firstName,setFirstName] =useState(localStorage.getItem("firstName"))
    const [lastName,setLastName] =useState(localStorage.getItem("lastName"))
    const [email,setEmail] =useState(localStorage.getItem("email"))
    const [contact,setMobile] =useState(localStorage.getItem("mobile"))
    const [gender,setGender] =useState(localStorage.getItem("gender"))
    const [companyRep , setCompanyRep] = useState("");
    const [profileImgUrl,setProfileImg] =useState()
    const [cvUrl , setCV] = useState("");
    const [certUrl , setCert] = useState("");
    const [applicatons,setApplication]=useState();
    const[loading,setLoading]=useState(true);

    const uploadProfileImg = async () =>{
        try{
            debugger
            const url = profileImgUrl
            debugger
            const formData = new FormData();
            formData.append('fromFile',profileImgUrl)
            formData.append('fileName',profileImgUrl.name)
            http.put(`${apiUrl}User/UploadProfileImage/${localStorage.getItem('userId')}`,formData)
            debugger
        }
        catch(error){
            alert(error.message)
        }
        
    }
    const uploadCV = async () =>{  
        debugger 
        const url = cvUrl
        http.put(`${apiUrl}/User/UploadCVDocument/${localStorage.getItem('userId')}`,url)
        debugger
    }
    const uploadCert = async () =>{
        debugger
        const url = certUrl
        http.put(`${apiUrl}User/UploadCourseCert/${localStorage.getItem('userId')}`,url)
        debugger
    }

    useEffect (() =>{
        try{
          http.get(`${apiUrl}User/GetApplications/${localStorage.getItem('userId')}`).then((response)=>{
            setApplication(response.data)
            debugger
          })
          .finally(()=>{
            if(applicatons != null){
              setLoading(false);
            }
          })
        }
        catch(error){
          alert(error.message)
        }
      },[])

    if(loading){       
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

                <li>Upload Profile Photo:</li><br /><input type="file" placeholder="Upload"  onChange={(event) =>setProfileImg(event.target.files[0])}/><button className="uploadButton" type="button" onClick={uploadProfileImg}> Upload</button>
                <br /><br />  

                <li>Upload CV:</li><br /><input type="file" placeholder="Upload" onChange={setCV} /><button className="uploadButton" type="button" onClick={uploadCV}> Upload</button>
                <br /><br />  
                
                <li>Upload Certificates:</li><br /><input type="file" placeholder="Upload" onChange={setCert} /><button className="uploadButton" type="button" onClick={uploadCert}> Upload</button>
                <br /><br />
                <li>
                <button 
                    className="btnEditProfile" 
                    onClick={() => history.push('/EditGradProfile')}
                    >
                        Edit Profile
                    </button>          
                </li>
                <br />        
                <li>
                <button 
                    className="btnMoocs" 
                    onClick={() => history.push('/Moocs')}
                    >
                        View MOOCs
                    </button>          
                </li>
                <br />
               {/* <li>
                <button 
                    className="btnViewCV" 
                    onClick={() => history.push('/')}
                    >
                        View CV
                </button>        
                </li>
                <br />*/}  
                <li>
                <button 
                    className="btnViewVacancies" 
                    onClick={() => history.push('/Vacancies')}
                    >
                        View Vacancies
                    </button>          
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
                        <label className="" >{firstName}</label>
                    </div>
                </div>

                <div className="gradRow">
                    <div className="colLeftGrad">
                        <label className="lblGradSurname">Surname:</label>
                    </div>
                    <div className="colRightGrad">
                        <label className="">{lastName}</label>
                    </div>
                </div>

                <div className="gradRow">
                    <div className="colLeftGrad">
                        <label className="lblGradEmail">Email:</label>
                    </div>
                    <div className="colRightGrad">
                        <label className="">{email}</label>
                    </div>
                </div>
                <div className="gradRow">
                    <div className="colLeftGrad">
                        <label className="lblGradContact">Contact:</label>
                    </div>
                    <div className="colRightGrad">
                        <label className="">{contact}</label>
                    </div>
                </div>
                <div className="gradRow">
                    <div className="colLeftGrad">
                        <label className="lblGradGender">Gender:</label>
                    </div>
                    <div className="colRightGrad">
                        <label className="">{gender}</label>
                    </div>
                </div>
                {/*<div className="gradRow">
                    <div className="colLeftGrad">
                        <label className="lblGradCompRep">Company Representing:</label>
                    </div>
                    <div className="colRightGrad">
                        <label className="">{companyRep}</label>
                    </div>
            </div>*/}
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
    else{
        return(
            <>
      <div className="gridGradProf">
        <header className="gradProfHeader">
            <i class="fa fa-user-circle" aria-hidden="true"></i>
            Graduate Profile
        </header>
        <main className="leftGradProf">

           {/** ONLY VISIBLE TO GRADUATE WHOSE PROFILE IT IS */} 
        <ul>

          <li>Upload Profile Photo:</li><br /><input type="file" placeholder="Upload"  onChange={(event) =>setProfileImg(event.target.files[0])}/><button className="uploadButton" type="button" onClick={uploadProfileImg}> Upload</button>
          <br /><br />  

          <li>Upload CV:</li><br /><input type="file" placeholder="Upload" onChange={setCV} /><button className="uploadButton" type="button" onClick={uploadCV}> Upload</button>
          <br /><br />  
          
          <li>Upload Certificates:</li><br /><input type="file" placeholder="Upload" onChange={setCert} /><button className="uploadButton" type="button" onClick={uploadCert}> Upload</button>
          <br /><br />
          <li>
          <button 
            className="btnEditProfile" 
            onClick={() => {
                history.push("/EditGradProfile");
            }}
            >
                Edit Profile
            </button>          
          </li>
          <br />        
          <li>
          <button 
            className="btnMoocs" 
            onClick={() => {
                history.push("/Moocs");
            }}
            >
              View MOOCs
            </button>          
          </li>
          <br />
          <li>
          <button 
            className="btnViewCV"
            onClick={() => {
                history.push("/");
            }}
            >
                View CV
            </button>          
          </li>
          <br />
          <li>
          <button 
            className="btnViewVacancies"
            onClick={() => {
                history.push("/Vacancies");
            }}
            >View Vacancies</button>          
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
                  <label className="" >{firstName}</label>
              </div>
          </div>

          <div className="gradRow">
              <div className="colLeftGrad">
                  <label className="lblGradSurname">Surname:</label>
              </div>
              <div className="colRightGrad">
                  <label className="">{lastName}</label>
              </div>
          </div>

          <div className="gradRow">
              <div className="colLeftGrad">
                  <label className="lblGradEmail">Email:</label>
              </div>
              <div className="colRightGrad">
                  <label className="">{email}</label>
              </div>
          </div>
          <div className="gradRow">
              <div className="colLeftGrad">
                  <label className="lblGradContact">Contact:</label>
              </div>
              <div className="colRightGrad">
                  <label className="">{contact}</label>
              </div>
          </div>
          <div className="gradRow">
              <div className="colLeftGrad">
                  <label className="lblGradGender">Gender:</label>
              </div>
              <div className="colRightGrad">
                  <label className="">{gender}</label>
              </div>
          </div>
          <div className="gradRow">
              <div className="colLeftGrad">
                  <label className="lblGradCompRep">Company Representing:</label>
              </div>
              <div className="colRightGrad">
                  <label className="">{companyRep}</label>
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
                    {
                        applicatons.map((applications) =>{
                            return(
                                <tr>
                                    <th>Job Title</th>
                                    <th>Application Status</th>
                                </tr>
                            )
                        })
                    }
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
        )
    }
}

export default GraduateProfile;
