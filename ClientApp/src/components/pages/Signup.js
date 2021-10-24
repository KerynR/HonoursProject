import React, { useState } from 'react';
import './Signup.css';
import history from '../history';

//GOOGLE LOGIN
import {GoogleLogin } from 'react-google-login';
import * as author from "firebase/auth";
import {firebase} from "../../firebase-config"
import { auth } from '../../firebase-config';
import axios, { Axios } from 'axios';
import { ajax } from 'jquery';
//my clientId from google
const clientId = '619690593220-h60fclv6skikhfqajjpredm31mi54b2e.apps.googleusercontent.com';

const http = axios;
//GREY OUT TEXBOXES DEPENDING ON RADIO BUTTON SELECTED
function EnableDisableTextbox(){
  var chkYes = document.getElementById("chkYes");
  var txtSector = document.getElementById("txtSector");
  txtSector.disabled = chkYes.checked ? false : true;
    if (!txtSector.disabled){
      txtSector.focus();
    }
}

const apiUrl='https://project-web.conveyor.cloud/api/'


function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("");
  const [dbo, setDBO] = useState("");
  const [gender, setGender] = useState("")
  const [mobile, setMobile] = useState("");
  const [sector, setSector] = useState("")
  const [vision, setVision] = useState("");
  const [mission, setMission] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [graduate,setGraduate] = useState("")
  const [rectruiter, setRecruiter] = useState("")
  const [company,setCompany] = useState("")
  const [userRole,setUserRole] = useState("")

  const onSuccess = ( res ) => {
    console.log('[Login Success] currentUser:', res.profileObj);
  };

  const onFailure = ( res ) => {
    console.log('[Login Failed] currentUser:', res);
  };

  const registerUser = async () =>{
    try{
      var onSuccess = function(){

      }
      const user =  await author.createUserWithEmailAndPassword(auth,email,password).then((response)=>{
        localStorage.setItem("userToken",response.user.stsTokenManager.accessToken)
        var userToSave ={
          UserID:null,
          FirstName: firstName,
          LastName: lastName,
          Mobile: mobile,
          Gender:gender,
          ImageUrl:null,
          Email:email,
          RoleId:parseInt(userRole),
          UUID : response.user.uid,
        }
        http.post(`${apiUrl}Auth/SingUpUser`,userToSave).then((response)=>{
          localStorage.setItem("userId",response.id)
          localStorage.setItem("displayName",userToSave.firstName)
          localStorage.setItem("imageUrl",userToSave.ImageUrl)
          localStorage.setItem("email",userToSave.email)
          history.push('/')
        });
      })
    }
    catch(error){
      alert(error.message)
    }
    
  }

   const setUser=function(event) {
    debugger
    setUserRole(event.target.value)
    debugger
  }

  const registerGoogleUser = async() =>{
    try{
      const googleProvider= new author.GoogleAuthProvider();
      const user =await author.signInWithPopup(auth,googleProvider).then((response)=>{
        debugger
        localStorage.setItem("userToken",response.user.stsTokenManager.accessToken)
        let userToSave ={
          FistName: response.user.displayName,
          LastName: response.user.displayName,
          Mobile: response.user.phoneNumber,
          Gender: response.user.gender,
          IsActive:true,
          RoleId:parseInt(userRole) ,
          Email:response.user.email,
          IsSuperAdmin:false,
          UUID : response.user.uid
        }
        http.post(`${apiUrl}Auth/SingUpUser`,userToSave).then((response)=>{
          localStorage.setItem("userId",response.id)
          localStorage.setItem("displayName",userToSave.firstName)
          localStorage.setItem("imageUrl",userToSave.ImageUrl)
          localStorage.setItem("email",userToSave.email)
          history.push('/')
        });
      })
      debugger
    }
    catch(error){
      alert(error.message)
    }
  }

  return (
    <div form-wrapper>
    <div className="form-container-signup">
      <div class="title_container-signup">
        <h1>Create Account</h1>
        <h3>Already have an account? <a href="/Login" >Login Here</a> </h3> 
        <br />
        <form>
         <h4>Select the account type that applies to you:</h4>
         <div className="radioAccType" onChange={setUser.bind(this)}>
          <input name="radAccTypeChoice" id="chkYes" type="radio" value={1}  />
          <label for="radioGrad">Graduate</label>
          <input name="radAccTypeChoice" id="chkYes" type="radio" value={2}   />
          <label for="radioRec">Recruiter</label>
          <input name="radAccTypeChoice" id="radioComp" type="radio" value={3}  />
          <label for="radioComp">Company</label>
        </div>

            {/** GRADUATE/RECRUITER/COMPANY */}
            <div className="rowSignup">
              <div class="col25Signup">
                <label className="lblFName" for="fname">First Name:</label>
              </div>
              <div className="col75Signup">
                <input type="text" id="" placeholder="First Name or Company Name"  onChange={(event) => {setFirstName(event.target.value)}}/>
              </div>
            </div>

          {/** GRADUATE/RECRUITER */}
          <div className="rowSignup">
            <div class="col25Signup">
              <label className="lblLName" for="lname">Last Name:</label>
            </div>
            <div className="col75Signup">
              <input type="text" id="" placeholder="Surname"  onChange={(event) => {setLastName(event.target.value)}}/>
            </div>
          </div>

          {/** GRADUATE/RECRUITER/COMPANY */}
          <div className="rowSignup">
            <div class="col25Signup">    
              <label className="lblEmail" for="email">Email:</label>
            </div>
            <div className="col75Signup">
              <input type="email" id="" placeholder="Email" onChange={(event) => {setEmail(event.target.value)}} />
            </div>
          </div>

          {/** GRADUATE/RECRUITER */}
          <div className="rowSignup">
            <div class="col25Signup">    
              <label className="lblDOB" for="dob">Date of Birth:</label>
            </div>
            <div className="col75Signup">
              <input type="date" id="" placeholder="Email" onChange={(event) => {setDBO(event.target.value)}} />
            </div>
          </div>

          {/** GRADUATE/RECRUITER */}
          <div className="rowSignup">
            <div class="col25Signup">    
              <label className="" for="gender">Gender:</label>
            </div>
            <div className="col75Signup">
              <input type="text" id="" placeholder="e.g. male, female or other" onChange={(event) => {setGender(event.target.value)}} />
            </div>
          </div>

          {/** GRADUATE/RECRUITER */}
          <div className="rowSignup">
            <div class="col25Signup">    
              <label className="lblMobile" for="mobile">Mobile:</label>
            </div>
            <div className="col75Signup">
              <input type="tel" id="" placeholder="Contact Number"  onChange={(event) => {setMobile(event.target.value)}}/>
            </div>
          </div>

          {/** COMPANY */}
          <div className="rowSignup">
            <div class="col25Signup">    
              <label className="lblSector" for="sector">Sector:</label>
            </div>
            <div className="col75Signup">
              <input type="text" id="txtSector" placeholder="E.g. Marketing" onChange={(event) => {setSector(event.target.value)}} />
            </div>
          </div>

          {/** COMPANY */}
          <div className="rowSignup">
            <div class="col25Signup">    
              <label className="lblVision" for="vision">Vision:</label>
            </div>
            <div className="col75Signup">
              <input type="text" id="" placeholder="..."  onChange={(event) => {setVision(event.target.value)}} />
            </div>
          </div>

          {/** COMPANY */}
          <div className="rowSignup">
            <div class="col25Signup">    
              <label className="lblMission" for="mission">Mission:</label>
            </div>
            <div className="col75Signup">
              <input type="text" id="" placeholder="..." onChange={(event) => {setMission(event.target.value)}} />
            </div>
          </div>
            
          {/** GRADUATE/RECRUITER/COMPANY */}  
          <div className="rowSignup">
            <div class="col25Signup">   
              <label className="lblPassword" for="password">Password:</label>
            </div>
            <div className="col75Signup">
              <input type="password" id="" placeholder="Password"  onChange={(event) => {setPassword(event.target.value)}}/>
            </div>
          </div>
              
          {/** GRADUATE/RECRUITER/COMPANY */}    
          <div className="rowSignup">
            <div class="col25Signup">          
              <label className="lblConfirmPassword" for="confirmpassword">Confirm Password:</label>
            </div>
            <div className="col75Signup">
              <input type="password" id="" placeholder="Re-enter Password"  onChange={(event) => {setConfirmPassword(event.target.value)}} />
            </div>
          </div>          
           <button   type="button" className="btnSignup" onClick={registerUser}>Register</button>
           <button className="btnCancelSignup" type="button" onClick={registerGoogleUser}>Sign Up Using Goolgle</button>
            {/* <div>
              <GoogleLogin className="btnGoogle"
                clientId={clientId}
                buttonText="Sign In using Google"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                style={{ marginTop: '100px' }}
                isSignedIn={true}
                />
            </div>
          
           <button 
            className="btnCancelSignup" 
            onClick={() => {
            history.push("/");
            }}
            >
              Back
            </button>
          
            </div> */}
           <button className="btnCancelSignup" variant="btn btn-success" onClick={() => history.push('/')}>Cancel</button>
          </form>
        </div>
        </div>
    </div>  
  );
}

export default Signup;
