import React,{useState} from 'react';
import './EditRecruiterProfile.css';
import Footer from '../../components/Footer';
import history from '../../components/history';


import axios, { Axios } from 'axios';
import * as author from "firebase/auth";
const apiUrl='https://localhost:44347/api/';
const http = axios;
{/** EDIT RECRUITER PROFILE */}

function EditRecruiterProfile() {
  const[firstName,setFirstName] = useState(localStorage.getItem("firstName"))
    const[lastName,setLastName] = useState(localStorage.getItem("lastName"))
    const[email,setEmail] = useState(localStorage.getItem("email"))
    const[mobile,setMobile] = useState(localStorage.getItem("mobile"))
    const[gender,setGender] = useState(localStorage.getItem("gender"))
    const[company,setCompanyName] = useState("TransformIT")

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


    const updateUser = async() =>{
      try{
        let userToSave ={
          FirstName:firstName,
          LastName: lastName,
          Mobile: mobile,
          Gender: gender,
          IsActive:true,
          RoleId:1 ,
          Email:email,
          IsSuperAdmin:false,
          UUID : localStorage.getItem("uuid")
        }
        http.put(`${apiUrl}User/UpdateUser/${localStorage.getItem("userId")}`,userToSave).then((response)=>{
          localStorage.setItem("firstName",firstName)
          localStorage.setItem("lastName",lastName)
          localStorage.setItem("mobile",mobile)
          localStorage.setItem("gender",gender)
          alert("Recruiter Profile updated")
          history.push('/RecruiterProfile')
        })
      }
      catch(error){
        alert(error.message)
      }
    }
  return (
    <>
    <div form-wrapper>
    <div className="form-container-editRec">
      <div className="title_container-editRec">
        <h1 className="h1EditRecProf">Edit Profile</h1>
        <form>

        <div className="rowEditRec">
          <div className="col-25-editRec">    
            <label className="lblRecName">First Name:</label>
          </div>
          <div className="col-75-editRec">
            <input type="text" placeholder="e.g. Harry"  value={firstName} onChange={(event) => {setFirstName(event.target.value)}}/>
          </div>
        </div> 
        <div className="rowEditRec">
          <div className="col-25-editRec">    
            <label className="lblRecLName">Last Name:</label>
          </div>
          <div className="col-75-editRec">
            <input type="text" placeholder="e.g. Potter"  value={lastName} onChange={(event) => {setLastName(event.target.value)}}/>
          </div>
        </div> 
        <div className="rowEditRec">
          <div className="col-25-editRec">          
            <label className="lblRecGender">Gender:</label>
          </div>
          <div className="col-75-editRec">
            <input type="text" placeholder="e.g. Male" value={gender} onChange={(event) => {setGender(event.target.value)}} />
          </div>
        </div>
        <div className="rowEditRec">
          <div className="col-25-editRec">    
            <label className="lblRecMobile">Mobile:</label>
          </div>
          <div className="col-75-editRec">
            <input type="tel" placeholder="e.g. 093 463 4664" value={mobile} onChange={(event) => {setMobile(event.target.value)}}/>
          </div>
        </div>
        
        <div className="rowEditRec">
          <div className="col-25-editRec">    
            <label className="lblRecEmail">Email:</label>
          </div>
          <div className="col-75-editRec">
            <input type="email" placeholder="e.g. harrypotter@gmail.com" value={email}  disabled={true}/>
          </div>
        </div>
                  
        <button type="button" className="btnSaveRecProf" variant="btn btn-success" onClick={updateUser}>Save</button>          
        <button className="btnDeleteRecProf" variant="btn btn-success" onClick={deleteUser}>Delete Profile</button>          
        <button className="btnCancelRecProf" variant="btn btn-success" onClick={() => history.push('/RecruiterProfile')}>Cancel</button>          

        </form>
        
      </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default EditRecruiterProfile;
