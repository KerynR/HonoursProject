import React,  { useState } from 'react';
import './EditCompanyProfile.css';
import Footer from '../../components/Footer';
import { useHistory } from "react-router";
import axios, { Axios } from 'axios';

{/* COMPANY CAN EDIT THEIR DETAILS HERE */}

//my clientId from google
const clientId = '619690593220-h60fclv6skikhfqajjpredm31mi54b2e.apps.googleusercontent.com';
const apiUrl='https://localhost:44347/api/';
const http = axios;
function EditCompanyProfile() {

  const history = useHistory();
  const [name,setCompanyName]=useState(localStorage.getItem("companyName"));
  const [sector,setCompanySector]=useState(localStorage.getItem("sector"));
  const [vision,setVision]=useState(localStorage.getItem("vision"));
  const [mission,setMission]=useState(localStorage.getItem("mission"));

   const updateCompany = async()=> {
     const company ={
       Id:localStorage.getItem("companyId"),
       Name:name,
       Sector:sector,
       Vision:vision,
       Mission:mission,
       LogoUrl:"blob:http://localhost:3000/c5242f3e-0a46-4ec5-8848-6344bc8587e4"
     }
    http.put(`${apiUrl}Company/UpdateCompany/${localStorage.getItem("companyId")}`,company).then((response)=>{
      debugger
    })
  }
  return (
    <>
        <div form-wrapper>
    <div className="form-container-EditComp">
      <div className="title_container-EditComp">
        <h1>Edit Company Profile</h1>
        <form >

        <div className="rowEditComp">
          <div className="col-25-EditComp">    
            <label className="lblCompNameEdit">Name:</label>
          </div>
          <div className="col-75-EditComp">
            <input type="text" placeholder=""  value={name} onChange={(event)=> setCompanyName(event.target.value)}/>
          </div>
        </div> 

        <div className="rowEditComp">
          <div className="col-25-EditComp">    
            <label className="lblSectorEdit">Sector:</label>
          </div>
          <div className="col-75-EditComp">
            <input type="text" placeholder="" value={sector} onChange={(event)=> setCompanySector(event.target.value)}/>
          </div>
        </div>
                     
        <div className="rowEditComp">
          <div className="col-25-EditComp">          
            <label className="lblVisionEdit">Vision:</label>
          </div>
          <div className="col-75-EditComp">
          <textarea name="txtAreaVision" rows="3" cols="50" type="text" placeholder="" value={vision} onChange={(event)=> setVision(event.target.value)}></textarea>

          </div>
        </div>

        <div className="rowEditComp">
          <div className="col-25-EditComp">          
            <label className="lblMissionEdit">Mission:</label>
          </div>
          <div className="col-75-EditComp">
          <textarea name="txtAreaMission" rows="5" cols="50" type="text" placeholder="" value={mission} onChange={(event)=> setMission(event.target.value)}></textarea>

          </div>
        </div>

        <button className="btnSaveCompProf" type="button" onClick={updateCompany}>Update</button>
        <input className="btnDeleteCompProf" type="submit" value="Delete Profile" />
        <button 
          className="btnCancelCompProf" 
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

export default EditCompanyProfile;
