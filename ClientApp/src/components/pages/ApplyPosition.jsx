import React,{useState,useEffect} from 'react';
import './ApplyPosition.css';
import Footer from '../Footer';
import * as author from "firebase/auth";
import {firebase} from "../../firebase-config"
import { auth } from '../../firebase-config';
import axios, { Axios } from 'axios';
import history from '../history';

const apiUrl='https://localhost:44347/api/';
const http = axios;

function ApplyPosition() {
  const [employer,setEmployer]=useState("Junior Software Developer");
  const [location,setLocation]=useState("Johannesburg")
  const [salary,setSalary]=useState(">R50 000");
  const [jobType,setJobType]=useState("We are looking for a candidate to take on an entry-level software developer position to assist the development team with all aspects of software design and coding. The primary role is to learn the codebase, attend design meetings, write basic code, fix bugs, and assist the Development Manager in all design-related tasks.");
  const [sector,setSector] = useState("Technology");
  const [duties,setDuties] = useState("Review and analyze business needs, Testing and troubleshooting of programs, Maintain exisiting software programs, Develop detailed programming logic and coding changes");
  const [skills,setSkills] = useState("Programming");
  const [startDate,setDate] = useState("2022-01-02 00:00:00.000");
  const [minRequirment,setRequirement] = useState("Relevant Degree");


  const applyToPostion = async ()=>{
    try{
      debugger
      let application ={
        Id: 0,
        UserId: parseInt(localStorage.getItem("userId")),
        VacancyId: parseInt(2),
        StatusId: parseInt(1),
        SkillId: parseInt(2),
        Motivation:'highly dedicated and goal driven individual',
        CVUrl:"blob:http://localhost:3000/c5242f3e-0a46-4ec5-8848-6344bc8587e4",
        IsActive:true,

      }
      http.post(`${apiUrl}User/Vacancy/ApplyToPosition`,application).then((response)=>{
        alert("Application submited")
        history.pushState("/GraduateProfile")
        debugger
      })
    }
    catch(error){
      alert(error.message)
    }
  }

  return (
    <>
    <div form-wrapper>
    <div className="form-container-ApplyPos">
      <div className="title_container-ApplyPos">
        <h1>Position Details</h1>
        <form>

        <div className="rowApplyPos">
          <div className="col-25-ApplyPos">    
            <label className="lblEmployerApplyPos">Employer:</label>
          </div>
          <div className="col-75-ApplyPos">
          <label >{employer}</label>
          </div>
        </div> 

        <div className="rowApplyPos">
          <div className="col-25-ApplyPos">    
            <label className="lblLocationApplyPos">Location:</label>
          </div>
          <div className="col-75-ApplyPos">
          <label >{location}</label>
          </div>
        </div> 

        <div className="rowApplyPos">
          <div className="col-25-ApplyPos">    
            <label className="lblSalaryApplyPos">Salary:</label>
          </div>
          <div className="col-75-ApplyPos">
          <label >{salary}</label>
          </div>
        </div> 

        <div className="rowApplyPos">
          <div className="col-25-ApplyPos">    
            <label className="lblJobTypeApplyPos">Job Type:</label>
          </div>
          <div className="col-75-ApplyPos">
          <label >{jobType}</label>
          </div>
        </div> 

        <div className="rowApplyPos">
          <div className="col-25-ApplyPos">    
            <label className="lblStartDateApplyPos">Start Date:</label>
          </div>
          <div className="col-75-ApplyPos">
          <label >{startDate}</label>
          </div>
        </div> 

        <div className="rowApplyPos">
          <div className="col-25-ApplyPos">    
            <label className="lblSectorApplyPos">Sector:</label>
          </div>
          <div className="col-75-ApplyPos">
          <label >{sector}</label>
          </div>
        </div> 

        <div className="rowApplyPos">
          <div className="col-25-ApplyPos">    
            <label className="lblDutiesRespApplyPos">Duties & Responsibilities:</label>
          </div>
          <div className="col-75-ApplyPos">
          <label >{duties}</label>
          </div>
        </div> 

        <div className="rowApplyPos">
          <div className="col-25-ApplyPos">    
            <label className="lblSkillsCompApplyPos">Skills & Competencies</label>
          </div>
          <div className="col-75-ApplyPos">
          <label >{skills}</label>
          </div>
        </div> 
                     
        <div className="rowApplyPos">
          <div className="col-25-ApplyPos">    
            <label className="lblMinReqApplyPos">Minimum Requirements:</label>
          </div>
          <div className="col-75-ApplyPos">
          <label >{minRequirment}</label>
          </div>
        </div> 

        
        <button className="btnApplyPos" type="button"  onClick={applyToPostion}>Apply</button>
        <input className="btnCancelPos" type="submit" value="Cancel" />

        </form>
        
      </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default ApplyPosition;
