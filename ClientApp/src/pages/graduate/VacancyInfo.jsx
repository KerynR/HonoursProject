import React, {useState, useEffect} from 'react';
import './VacancyInfo.css';
import Footer from '../../components/Footer';
import history from '../../components/history';
import axios, { Axios } from 'axios';
import { useHistory } from "react-router";

const apiUrl='https://localhost:44347/api/';
const http = axios;

function VacancyInfo() {
    const history = useHistory();

    const[jobTitle,setjobTitle]=useState();
    const[companyName,setcompanyName]=useState();
    const[location,setlocation]=useState();
    const[jobDescription,setjobDescription]=useState();
    const[sector,setsector]=useState();
    const[startDate,setstartDate]=useState();
    const[responsibilities,setresponsibilities]=useState();
    const[skillName,setskillName]=useState();
    const[motivation,setMotivation]=useState("");
    const[loading,setLoading]=useState(true);
    useEffect (() =>{
        try{
          http.get(`${apiUrl}Vacancy/${localStorage.getItem('vacancyId')}`).then((response)=>{
           const vacancy = response.data[0];
           debugger
           setjobTitle(vacancy.jobTitle);
           setcompanyName(vacancy.companyName);
           setlocation(vacancy.location);
           setjobDescription(vacancy.jobDescription);
           setsector(vacancy.sector);
           setstartDate(vacancy.startDate);
           setresponsibilities(vacancy.responsibilities);
           setskillName(vacancy.skillName);
          })
          .finally(()=>{
            
              setLoading(false);

          })
        }
        catch(error){
          alert(error.message)
        }
      },[])

      const applyToPostion = async ()=>{
        try{
          debugger
          let application ={
            Id: 0,
            UserId: parseInt(localStorage.getItem("userId")),
            VacancyId: parseInt(localStorage.getItem("vacancyId")),
            StatusId: parseInt(1),
            SkillId: parseInt(1),
            Motivation:motivation,
            CVUrl:"blob:http://localhost:3000/c5242f3e-0a46-4ec5-8848-6344bc8587e4",
            IsActive:true,
    
          }
          http.post(`${apiUrl}User/Vacancy/ApplyToPosition`,application).then((response)=>{
            debugger
            alert("Application submited")
            history.push("/Vacancies")
           
          })
        }
        catch(error){
          alert(error.message)
        }
      }
 if(loading){
    return (
        <>
        <div form-wrapper>
        <div className="form-container-vacInfo">
          <div className="title_container-vacInfo">
                <h1>Vacancy Information</h1>
                <form>
                    <div className="rowVacInfo">
                        <div class="col25VacInfo">    
                            <label>Job Title:</label>
                        </div>
                        <div className="col75VacInfo">
                            <label></label>
                        </div>
                    </div>
    
                    <div className="rowVacInfo">
                        <div class="col25VacInfo">    
                            <label>Company Name:</label>
                        </div>
                        <div className="col75VacInfo">
                        <label></label>
                        </div>
                    </div>
    
                    <div className="rowVacInfo">
                        <div class="col25VacInfo">    
                            <label>Location:</label>
                        </div>
                        <div className="col75VacInfo">
                        <label></label>
                        </div>
                    </div>
    
                    <div className="rowVacInfo">
                        <div class="col25VacInfo">    
                            <label>Job Description:</label>
                        </div>
                        <div className="col75VacInfo">
                        <label></label>
                        </div>
                    </div>
    
                    <div className="rowVacInfo">
                        <div class="col25VacInfo">    
                            <label>Sector:</label>
                        </div>
                        <div className="col75VacInfo">
                        <label></label>
                        </div>
                    </div>
    
                    <div className="rowVacInfo">
                        <div class="col25VacInfo">    
                            <label>Start Date:</label>
                        </div>
                        <div className="col75VacInfo">
                        <label></label>
                        </div>
                    </div>
    
                    <div className="rowVacInfo">
                        <div class="col25VacInfo">    
                            <label>Responsibilities:</label>
                        </div>
                        <div className="col75VacInfo">
                        <label></label>
                        </div>
                    </div>
    
                    <div className="rowVacInfo">
                        <div class="col25VacInfo">    
                            <label>Skill Name:</label>
                        </div>
                        <div className="col75VacInfo">
                        <label></label>
                        </div>
                    </div>
    
    
                    {/*ONLY VISIBLE TO GRADUATE*/}
                    <label>Upload motivation:</label>
                    <input type="file" /><br /><br />
                    <label>Upload CV:</label>
                    <input type="file" /><br /><br />
                    <button type="button" className="btnApplyVac">Apply</button>
                    <button className="btnCancelApplyVac">Cancel</button>
    
    
                </form>
            </div>
            </div>
            </div>
    
            <Footer/>
        </>
      );
 }  
 else{
    return (
        <>
        <div form-wrapper>
        <div className="form-container-vacInfo">
          <div className="title_container-vacInfo">
                <h1>Vacancy Information</h1>
                <form>
                    <div className="rowVacInfo">
                        <div class="col25VacInfo">    
                            <label>Job Title:</label>
                        </div>
                        <div className="col75VacInfo">
                            <label>{jobTitle}</label>
                        </div>
                    </div>
    
                    <div className="rowVacInfo">
                        <div class="col25VacInfo">    
                            <label>Company Name:</label>
                        </div>
                        <div className="col75VacInfo">
                        <label>{companyName}</label>
                        </div>
                    </div>
    
                    <div className="rowVacInfo">
                        <div class="col25VacInfo">    
                            <label>Location:</label>
                        </div>
                        <div className="col75VacInfo">
                        <label>{location}</label>
                        </div>
                    </div>
    
                    <div className="rowVacInfo">
                        <div class="col25VacInfo">    
                            <label>Job Description:</label>
                        </div>
                        <div className="col75VacInfo">
                        <label>{jobDescription}</label>
                        </div>
                    </div>
    
                    <div className="rowVacInfo">
                        <div class="col25VacInfo">    
                            <label>Sector:</label>
                        </div>
                        <div className="col75VacInfo">
                        <label>{sector}</label>
                        </div>
                    </div>
    
                    <div className="rowVacInfo">
                        <div class="col25VacInfo">    
                            <label>Start Date:</label>
                        </div>
                        <div className="col75VacInfo">
                        <label>{startDate}</label>
                        </div>
                    </div>
    
                    <div className="rowVacInfo">
                        <div class="col25VacInfo">    
                            <label>Responsibilities:</label>
                        </div>
                        <div className="col75VacInfo">
                        <label>{responsibilities}</label>
                        </div>
                    </div>
    
                    <div className="rowVacInfo">
                        <div class="col25VacInfo">    
                            <label>Skill Name:</label>
                        </div>
                        <div className="col75VacInfo">
                        <label>{skillName}</label>
                        </div>
                    </div>
    
    
                    {/*ONLY VISIBLE TO GRADUATE*/}
                    <label>Motivation:</label>
                    <input type="text" onChange={(event) => {setMotivation(event.target.value)}} /><br /><br />
                    <label>Upload CV:</label>
                    <input type="file" /><br /><br />
                    <button type="button"  className="btnApplyVac" onClick={applyToPostion}>Apply</button>
                    <button className="btnCancelApplyVac">Cancel</button>
    
    
                </form>
            </div>
            </div>
            </div>
    
            <Footer/>
        </>
      );
 }
  
}

export default VacancyInfo;
