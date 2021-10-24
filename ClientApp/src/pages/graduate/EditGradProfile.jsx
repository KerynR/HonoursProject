import React ,{useState}from 'react';
import './EditGradProfile.css';
import Footer from '../../components/Footer';
import history from '../../components/history';
import { Http } from '@material-ui/icons';


import * as author from "firebase/auth";
import {firebase} from "../../firebase-config"
import { auth } from '../../firebase-config';
import axios, { Axios } from 'axios';
{/* EDIT GRADUATE PROFILE PAGE */}

const apiUrl='https://localhost:44347/api/';
const http = axios;

function EditGradProfile() {
    const [firstName,setFirstName] =useState(localStorage.getItem("firstName"))
    const [lastName,setLastName] =useState(localStorage.getItem("lastName"))
    const [email,setEmail] =useState(localStorage.getItem("email"))
    const [contact,setMobile] =useState(localStorage.getItem("mobile"))
    const [gender,setGender] =useState(localStorage.getItem("gender"))

    const updateUser = async() =>{
      try{
        let userToSave ={
          FirstName:firstName,
          LastName: lastName,
          Mobile: contact,
          Gender: gender,
          IsActive:true,
          RoleId:1 ,
          Email:email,
          IsSuperAdmin:false,
          UUID : localStorage.getItem("uuid")
        }
        http.put(`${apiUrl}User/UpdateUser/${localStorage.getItem("userId")}`,userToSave).then((response)=>{
          history.push('/GraduateProfile')
        })
      }
      catch(error){
        alert(error.message)
      }
    }

    const deleteUser = async()=>{
      try{
        http.put(`${apiUrl}/User/DeleteUser/${localStorage.getItem("userId")}`).then((response)=>{
      
            debugger
            author.signOut()
            history.push("/")
 
          
        })
      }
      catch(error){
        alert(error.message)
      }
    }


  return (
    <>
    <div form-wrapper-editGradProf>
    <div className="form-container-editGradProf">
      <div className="title_container-editGradProf">
        <h1>Edit Profile</h1>
        <form>

        <div className="rowEditGradProf">
          <div className="col-25-editGradProf">    
            <label className="lblGradName">First Name:</label>
          </div>
          <div className="col-75-editGradProf">
            <input type="text" placeholder="e.g. Harry" value={firstName} onChange={(event)=>{setFirstName(event.target.value)}}/>
          </div>
        </div> 
        <div className="rowEditGradProf">
          <div className="col-25-editGradProf">    
            <label className="lblGradLName">Last Name:</label>
          </div>
          <div className="col-75-editGradProf">
            <input type="text" placeholder="e.g. Potter"  value={lastName} onChange={(event) => {setLastName(event.target.value)}}/>
          </div>
        </div> 
        <div className="rowEditGradProf">
          <div className="col-25-editGradProf">          
            <label className="lblGradGender">Gender:</label>
          </div>
          <div className="col-75-editGradProf">
            <input type="text" placeholder="e.g. Male"  value={gender}  onChange={(event) => {setGender(event.target.value)}}/>
          </div>
        </div>
        <div className="rowEditGradProf">
          <div className="col-25-editGradProf">    
            <label className="lblGradMobile">Mobile:</label>
          </div>
          <div className="col-75-editGradProf">
            <input type="tel" placeholder="e.g. 093 463 4664" value={contact}  onChange={(event) => {setMobile(event.target.value)}}/>
          </div>
        </div>
        
        <div className="rowEditGradProf">
          <div className="col-25-editGradProf">    
            <label className="lblGradEmail">Email:</label>
          </div>
          <div className="col-75-editGradProf">
            <input type="email" placeholder="e.g. harrypotter@gmail.com" value={email} onChange={(event) => {setEmail(event.target.value)}}/>
          </div>
        </div>
                  
        <button type="button" className="btnSaveGradProf" variant="btn btn-success" onClick={updateUser}>Save</button>          
        <button type="button" className="btnDeleteGradProf" variant="btn btn-success" onClick={deleteUser}>Delete Profile</button>          
        <button className="btnCancelGradProf" variant="btn btn-success" onClick={() => history.push('/GraduateProfile')}>Cancel</button>          

        </form>
        
      </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default EditGradProfile;
