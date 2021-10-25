import React, {useState, useEffect} from 'react';
import './ViewSubmissions.css';
import Footer from '../../components/Footer';
import history from '../../components/history';

import axios, { Axios } from 'axios';
import { useHistory } from "react-router";

const apiUrl='https://localhost:44347/api/';
const http = axios;

{/** ONLY VISIBLE TO THE COMPANY AND COMPANY REP */}

function ViewSubmissions() {
  const [compnayId,setCompanyId]=useState(localStorage.getItem("companyId"));
  const [submissions,setSubmission] = useState(null);
  const[loading,setLoading]=useState(true);
  const[vacancyId,setVacancyId]=useState()
  
  function approveApplication(vacancy){
    let application ={
      Id: vacancy.Id,
      UserId: vacancy.userId,
      VacancyId: vacancy.vacancyId,
      StatusId: 3,
      SkillId: parseInt(1),
      Motivation:vacancy.motivation,
      CVUrl:vacancy.cvUrl,
      IsActive:true,

    }
    http.put(`${apiUrl}Company/Vacancy/ApproveApplication/${compnayId}/${vacancy.vacancyId}`,application).then((response)=>{
      alert("Application has been approved")
     
  })
  }
  function rejectApplication(vacancy){
    let application ={
      Id: vacancy.Id,
      UserId: vacancy.userId,
      VacancyId: vacancy.vacancyId,
      StatusId: 3,
      SkillId: parseInt(1),
      Motivation:vacancy.motivation,
      CVUrl:vacancy.cvUrl,
      IsActive:true,

    }
    http.put(`${apiUrl}Company/Vacancy/RejectApplication/${compnayId}/${vacancy.vacancyId}`,application).then((response)=>{
      alert("application declined")

    })
  }
  useEffect (() =>{
    try{
      http.get(`${apiUrl}Company/ViewSubmissions/${compnayId}`).then((response)=>{
        debugger 
        setSubmission(response.data)
        debugger
            }).finally(()=>{
                setLoading(false);
            })
      
    }
    catch(error){
      alert(error.message)
    }
  },[])



  if(loading){
    return (
      <>
      <div class="gridViewSub">
          <header className="viewSubsHeader">
          View Submissions
          </header>
          <main className="submissionsTbl">
            <table className="tblViewSub">
              <thead>
                <tr>
                      <th>First Name</th>                
                      <th>Last Name</th>
                      <th>Motivation</th>
                      <th>CV URL</th>
                      <th>Approve Application</th>
                      <th>Reject Application</th>

                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td></td>   
                </tr>
              </tbody>
            </table>
          </main>
          
          <div className="viewSubmissionsBtns">
            <button className="btnBackViewSub">
              Back
            </button>
          </div>

          </div>
        <Footer/>
      </>
    );
  }
  else{
      return (
        <>
        <div class="gridViewSub">
            <header className="viewSubsHeader">
            View Submissions
            </header>
            <main className="submissionsTbl">
              <table className="tblViewSub">
                <thead>
                  <tr>
                        <th>First Name</th>                
                        <th>Last Name</th>
                        <th>Motivation</th>
                        <th>CV URL</th>
                        <th>Approve Application</th>
                        <th>Reject Application</th>

                  </tr>
                </thead>
                <tbody>
                {
                  submissions.map((sub) =>{
                  return (
                      <tr>
                        <td>{sub.firstName}</td>
                        <td>{sub.lastName}</td>
                        <td>{sub.motivation}</td>
                        <td>{sub.cvUrl}</td>
                        <td><button type="button" onClick={()=>{approveApplication(sub)}}>Approve</button></td>
                        <td><button type="button" onClick={()=>{rejectApplication(sub)}}>Decline</button></td>   
                      </tr>
                    )
                  })
                  }
                </tbody>
              </table>
            </main>
            
            <div className="viewSubmissionsBtns">
              <button className="btnBackViewSub">
                Back
              </button>
            </div>

            </div>
          <Footer/>
        </>
      );
    }
  
}

export default ViewSubmissions;
