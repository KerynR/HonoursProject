import React, { useEffect, useState } from 'react';
import './CreatePosition.css';
import Footer from '../../components/Footer';
import { useHistory } from "react-router";

import axios, { Axios } from 'axios';

const apiUrl='https://localhost:44347/api/';
const http = axios;
{/* COMPANIES AND RECRUITERS CAN CREATE JOB VACANCIES HERE */}

function CreatePosition() {

  
  const [vacancyName,setVacancyName]=useState("");
  const [title,setTitle]=useState("");
  const [startDate,setStartDate]=useState(null);
  const [jobDesc,setJobDesc]=useState("");
  const [location,setLocation]=useState("");
  const [closingDate,setClosingDate]=useState(null);
  const [duties,setDuties]=useState("");
  const [requirements,setRequirment] = useState("");


  const creatVacancy = async() =>{
    try{
      const vacancy ={
        Id:0,
        CompanyId:3,
        SkillRequirementId:2,
        JobTitle: title,
        JobDescription:jobDesc,
        Location:location,
        Responsibilities:duties,
        DocumentUploadUrl:"blob:http://localhost:3000/c5242f3e-0a46-4ec5-8848-6344bc8587e4",
        IsActive:true,
        ApplicationClosingDate:closingDate,
        ApplictionOpeningDate:startDate,
        StartDate:startDate,
        CreatedBy:localStorage.getItem("firstName") + '' +localStorage.getItem("lastName"),
        ModifiedBy:localStorage.getItem("firstName") + '' +localStorage.getItem("lastName"),

      }
      http.post(`${apiUrl}/Company/Vacancy/CreatePosition/${3}`,vacancy).then((response)=>{
        alert("Vacancy Created Successfully")
      })
    } 
    catch(error){
      alert(error.message)
    }
  }

  const history = useHistory();

  return (
    <>
    <div form-wrapper-CreatePos>
    <div className="form-container-CreatePos">
      <div class="title_container-CreatePos">
        <header className="headerCreateNewPos">Create New Position</header>
        <form>

        <div className="rowCreatePos">
          <div class="col-25-CreatePos">    
            <label className="lblVacName">Vacancy Name:</label>
          </div>
          <div className="col-75-CreatePos">
            <input type="text" placeholder="" onChange={(event)=> setVacancyName(event.target.value)} />
          </div>
        </div> 

        <div className="rowCreatePos">
          <div class="col-25-CreatePos">    
            <label className="lblJobTitle">Job Title:</label>
          </div>
          <div className="col-75-CreatePos">
            <input type="text" placeholder=""   onChange={(event)=> setTitle(event.target.value)}/>
          </div>
        </div> 
        <div className="rowCreatePos">
          <div class="col-25-CreatePos">    
            <label className="lblStartDate">Start Date:</label>
          </div>
          <div className="col-75-CreatePos">
            <input type="date" placeholder=""   onChange={(event)=> setStartDate(event.target.value)}/>
          </div>
        </div>

        <div className="rowCreatePos">
          <div class="col-25-CreatePos">    
            <label className="lblJobDescr">Job Description:</label>
          </div>
          <div className="col-75-CreatePos">
          <textarea name="txtAreaCPJobDes" rows="5" cols="50" type="text" placeholder=""   onChange={(event)=> setJobDesc(event.target.value)}></textarea>

          </div>
        </div> 

        <div className="rowCreatePos">
          <div class="col-25-CreatePos">    
            <label className="lblJobLoc">Location:</label>
          </div>
          <div className="col-75-CreatePos">
            <input type="text" placeholder=""   onChange={(event)=> setLocation(event.target.value)}/>
          </div>
        </div> 

        <div className="rowCreatePos">
          <div class="col-25-CreatePos">    
            <label lblJobCloseDate>Closing Date:</label>
          </div>
          <div className="col-75-CreatePos">
            <input type="date" placeholder=""   onChange={(event)=> setClosingDate(event.target.value)}/>
          </div>
        </div>

        <div className="rowCreatePos">
          <div class="col-25-CreatePos">    
            <label className="lblJobResp">Responsibilities:</label>
          </div>
          <div className="col-75-CreatePos">
          <textarea name="txtAreaCPResp" rows="5" cols="50" type="text" placeholder=""  onChange={(event)=> setDuties(event.target.value)}></textarea>

          </div>
        </div> 

        <div className="rowCreatePos">
          <div class="col-25-CreatePos">    
            <label className="lblSkillReq">Skill Requirements:</label>
          </div>
          <div className="col-75-CreatePos">
          <textarea name="txtAreaCPSkillsReq" rows="5" cols="50" type="text" placeholder=""  onChange={(event)=> setRequirment(event.target.value)}></textarea>

          </div>
        </div>

        <button className="btnPostPos" type="button" onClick={creatVacancy} >Post Position</button>
        <button 
          className="btnCancelCreatePos" 
          onClick={() => {
            history.push("/CompanyProfile");
        }}
          >
            Cancel
          </button>

        </form>
        
      </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default CreatePosition;
