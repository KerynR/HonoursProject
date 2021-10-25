import React, {useState,useEffect} from 'react';
import './EditVacancy.css';
import Footer from '../../components/Footer';
import axios, { Axios } from 'axios';
import { useHistory } from "react-router";


const apiUrl='https://localhost:44347/api/';
const http = axios;
{/* COMPANY CAN EDIT JOB VACANCY HERE */}

function EditVacancy() {
    const history = useHistory();

    const[jobTitle,setjobTitle]=useState();
    const[companyName,setcompanyName]=useState();
    const[location,setlocation]=useState();
    const[jobDescription,setjobDescription]=useState();
    const[sector,setsector]=useState();
    const[startDate,setstartDate]=useState();
    const[responsibilities,setresponsibilities]=useState();
    const[skillName,setskillName]=useState();
    const[closingDate,setClosingDate]=useState("");
    const[vacancyId,setVacancyID]=useState(localStorage.getItem('vacancyId'))
    const[loading,setLoading]=useState(true);
    useEffect (() =>{
        try{
          http.get(`${apiUrl}Vacancy/${vacancyId}`).then((response)=>{
           const vacancy = response.data[0];
            if(vacancy != null){
                setjobTitle(vacancy.jobTitle);
                setcompanyName(vacancy.companyName);
                setlocation(vacancy.location);
                setjobDescription(vacancy.jobDescription);
                setsector(vacancy.sector);
                setstartDate(Date(vacancy.startDate));
                setresponsibilities(vacancy.responsibilities);
                setskillName(vacancy.skillName);
            }
          })
          .finally(()=>{
            
              setLoading(false);

          })
        }
        catch(error){
          alert(error.message)
        }
      },[])

const deleteVacancy =() =>{
    http.put(`${apiUrl}Company/Vacancy/DeletePosition/${localStorage.getItem('vacancyId')}`).then((response)=>{
        alert('Vacancy has been removed')
        history.push("/Vacancies")
    })
}
const updateVacancy = () =>{
    const vacancy ={
        Id:localStorage.getItem('vacancyId'),
        CompanyId:localStorage.getItem('companyId'),
        SkillRequirementId:1,
        JobTitle:jobTitle,
        JobDescription:jobDescription,
        Location:location,
        Responsibilities:responsibilities,
        DocumentUploadUrl:"blob:http://localhost:3000/c5242f3e-0a46-4ec5-8848-6344bc8587e4",
        ApplicationClosingDate:new Date(closingDate),
        StartDate:new Date(closingDate)

    }
    debugger
   http.put(`${apiUrl}Company/Vacancy/UpdatePosition/${localStorage.getItem('companyId')}/${localStorage.getItem('vacancyId')}`,vacancy).then((response)=>{
       alert("Vacancy updated")
       history.push("/Vacancies")
   })
}

if(loading){
    return (
        <>
        <div form-wrapper>
        <div className="form-container-editVac">
        <div className="title_container-editVac">
                <h1 className="editVacH1">Edit Vacancy</h1>
                <form>
                    <div className="rowEditVac">
                        <div class="col-25-editVac">    
                            <label className="lblJobTitleVac">Job Title:</label>
                        </div>
                        <div className="col-75-editVac">
                            <input type="text" placeholder="..."  />
                        </div>
                    </div>

                    <div className="rowEditVac">
                        <div class="col-25-editVac">    
                            <label className="lblLocationVac">Location:</label>
                        </div>
                        <div className="col-75-editVac">
                            <input type="text" placeholder="..."  />
                        </div>
                    </div>

                    <div className="rowEditVac">
                        <div class="col-25-editVac">    
                            <label className="lblJobDescrVac">Job Description:</label>
                        </div>
                        <div className="col-75-editVac">
                        <textarea name="txtAreaJobDesc" rows="5" cols="50" type="text" placeholder="..." ></textarea>

                        </div>
                    </div>

                    <div className="rowEditVac">
                        <div class="col-25-editVac">    
                            <label className="lblSectorVac">Sector:</label>
                        </div>
                        <div className="col-75-editVac">
                            <input type="text" placeholder="..."  />
                        </div>
                    </div>

                    <div className="rowEditVac">
                        <div class="col-25-editVac">    
                            <label className="lblStartDateVac">Start Date:</label>
                        </div>
                        <div className="col-75-editVac">
                            <input Text type="date" placeholder=""  />
                        </div>
                    </div>

                    <div className="rowEditVac">
                        <div class="col-25-editVac">    
                            <label className="lblCloseDateVac">Closing Date:</label>
                        </div>
                        <div className="col-75-editVac">
                            <input type="date" placeholder=""  />
                        </div>
                    </div>

                    <div className="rowEditVac">
                        <div class="col-25-editVac">    
                            <label className="lblRespVac">Responsibilities:</label>
                        </div>
                        <div className="col-75-editVac">
                        <textarea name="txtAreaResp" rows="5" cols="50" type="text" placeholder="" ></textarea>
                        </div>
                    </div>

                    <div className="rowEditVac">
                        <div class="col-25-editVac">    
                            <label className="lblSkillReqVac">Skill Requirement:</label>
                        </div>
                        <div className="col-75-editVac">
                            <textarea name="txtAreaSR" rows="5" cols="50" type="text" placeholder="" ></textarea>
                        </div>
                    </div>


                    {/*ONLY VISIBLE TO COMPANY*/}
                    <button className="btnDeleteVac">Delete Vacancy</button><br />
                    <button className="btnSaveVac" variant="btn btn-success" onClick={() => history.push('/Vacancies')}>Save</button>
                    <button className="btnCancelVac" variant="btn btn-success" onClick={() => history.push('/Vacancies')}>Cancel</button>

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
            <div className="form-container-editVac">
            <div className="title_container-editVac">
                    <h1 className="editVacH1">Edit Vacancy</h1>
                    <form>
                        <div className="rowEditVac">
                            <div class="col-25-editVac">    
                                <label className="lblJobTitleVac">Job Title:</label>
                            </div>
                            <div className="col-75-editVac">
                                <input type="text" placeholder="..."  value={jobTitle}  onChange={(event) => {setjobTitle(event.target.value)}}/>
                            </div>
                        </div>
    
                        <div className="rowEditVac">
                            <div class="col-25-editVac">    
                                <label className="lblLocationVac">Location:</label>
                            </div>
                            <div className="col-75-editVac">
                                <input type="text" placeholder="..." value={location}  onChange={(event) => {setlocation(event.target.value)}} />
                            </div>
                        </div>
    
                        <div className="rowEditVac">
                            <div class="col-25-editVac">    
                                <label className="lblJobDescrVac">Job Description:</label>
                            </div>
                            <div className="col-75-editVac">
                            <textarea name="txtAreaJobDesc" rows="5" cols="50" type="text" placeholder="..." value={jobDescription}  onChange={(event) => {setjobDescription(event.target.value)}} ></textarea>
    
                            </div>
                        </div>
    
                        <div className="rowEditVac">
                            <div class="col-25-editVac">    
                                <label className="lblSectorVac">Sector:</label>
                            </div>
                            <div className="col-75-editVac">
                                <input type="text" placeholder="..." value={sector}  onChange={(event) => {setsector(event.target.value)}} />
                            </div>
                        </div>
    
                        <div className="rowEditVac">
                            <div class="col-25-editVac">    
                                <label className="lblStartDateVac">Start Date:</label>
                            </div>
                            <div className="col-75-editVac">
                                <input Text type="date" placeholder="" value={startDate}  onChange={(event) => {setstartDate(event.target.value)}} />
                            </div>
                        </div>
    
                        <div className="rowEditVac">
                            <div class="col-25-editVac">    
                                <label className="lblCloseDateVac">Closing Date:</label>
                            </div>
                            <div className="col-75-editVac">
                                <input type="date" placeholder="" onChange={(event) => {setClosingDate(event.target.value)}}/>
                            </div>
                        </div>
    
                        <div className="rowEditVac">
                            <div class="col-25-editVac">    
                                <label className="lblRespVac">Responsibilities:</label>
                            </div>
                            <div className="col-75-editVac">
                            <textarea name="txtAreaResp" rows="5" cols="50" type="text" placeholder="" value={responsibilities}  onChange={(event) => {setresponsibilities(event.target.value)}}></textarea>
                            </div>
                        </div>
    
                        <div className="rowEditVac">
                            <div class="col-25-editVac">    
                                <label className="lblSkillReqVac">Skill Requirement:</label>
                            </div>
                            <div className="col-75-editVac">
                                <textarea name="txtAreaSR" rows="5" cols="50" type="text" placeholder="" value={skillName}  onChange={(event) => {setskillName(event.target.value)}}></textarea>
                            </div>
                        </div>
    
    
                        {/*ONLY VISIBLE TO COMPANY*/}
                        <button type="button" className="btnDeleteVac" onClick={deleteVacancy}>Delete Vacancy</button><br />
                        <button type="button" className="btnSaveVac" variant="btn btn-success" onClick={updateVacancy}>Save</button>
                        <button className="btnCancelVac" variant="btn btn-success" onClick={() => history.push('/Vacancies')}>Cancel</button>
    
                    </form>
                </div>
                </div>
                </div>
    
                <Footer/>
            </>
        );
    }
}


export default EditVacancy;
