import React, { useState, useEffect } from 'react';
import './Signup.css';
import { useHistory } from "react-router";
import Footer from '../../components/Footer';

//GOOGLE LOGIN
import {GoogleLogin } from 'react-google-login';
import * as author from "firebase/auth";
import {firebase} from "../../firebase-config"
import { auth } from '../../firebase-config';
import axios, { Axios } from 'axios';
import { ajax } from 'jquery';
import { Dropdown } from 'bootstrap';
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

const apiUrl='https://localhost:44347/api/'


function Signup() {

  const history = useHistory();
  
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
  const[loading,setLoading]=useState(true);
  const [companies,setCompanies] = useState("")
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
        if(userToSave.RoleId == 3 ){
          var company ={
            Name: firstName,
            Sector: sector,
            Mobile: mobile,
            Vision:vision,
            Mission:mission,
            Email:email,
            IsActive:true,
          }
          http.post(`${apiUrl}Auth/SingUpCompany`,company).then((companyResp)=>{
            debugger
            const companyId = companyResp.data
            http.post(`${apiUrl}Auth/SingUpUser`,userToSave).then((response)=>{
              const userId = response.data
              http.put(`${apiUrl}Company/AddNewCompanyRep/${companyId}/${userId}`).then((response)=>{
                alert('Company and Company Rep created')
              })
            //   localStorage.setItem("userId",response.id)
            //   localStorage.setItem("displayName",userToSave.firstName)
            //   localStorage.setItem("imageUrl",userToSave.ImageUrl)
            //   localStorage.setItem("email",userToSave.email)
            //   history.push('/')
            });
          })
        }
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
  useEffect (() =>{
    try{
      http.get(`${apiUrl}Company/GetCompanies`).then((response)=>{
        debugger
        setCompanies(response.data)
        debugger
      })
      .finally(()=>{
        
          setLoading(false);

      })
    }
    catch(error){
      alert(error.message)
    }
  },[])


  if(loading){
    return(
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
            <h5 for="radioGrad">Graduate</h5>
            <input name="radAccTypeChoice" id="chkYes" type="radio" value={2}   />
            <h5 for="radioRec">Recruiter</h5>
            <input name="radAccTypeChoice" id="radioComp" type="radio" value={3}  />
            <h5 for="radioComp">Company</h5>
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

          <div hidden={userRole ==1 ||userRole ==2}>
            {/** COMPANY */}
            <div  className="rowSignup">
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
            <button className="btnSub" type="button" onClick={registerUser}>Register </button>
            <button className="btnCancelSignup" type="button" onClick={registerGoogleUser}>Sign Up Using Google</button>
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
            <button 
              className="btnCancelSignup" 
              onClick={() => {
                history.push("/")
              }}
              >
                Cancel
              </button>
            </form>
          </div>
          </div>
          <Footer/>
      </div>  
  );
  }
  else{
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
          <h5 for="radioGrad">Graduate</h5>
          <input name="radAccTypeChoice" id="chkYes" type="radio" value={2}   />
          <h5 for="radioRec">Recruiter</h5>
          <input name="radAccTypeChoice" id="radioComp" type="radio" value={3}  />
          <h5 for="radioComp">Company</h5>
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

          {/**Recruiter Company */}
          {/* <div>
          <div className="rowSignup">
            <div class="col25Signup">    
              <label className="lblCompany" for="Company">Company:</label>
            </div>
            <div className="col75Signup">
              <Dropdown type="" id="" placeholder="Company Name" data={companies} onChange={(event) => {setCompany(event.target.value)}}/>
            </div>
          </div>
          </div> */}

        <div hidden={userRole ==1 ||userRole ==2}>
          {/** COMPANY */}
          <div  className="rowSignup">
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
          <button className="btnSub" type="button" onClick={registerUser}>Register </button>
           <button className="btnCancelSignup" type="button" onClick={registerGoogleUser}>Sign Up Using Google</button>
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
           <button 
            className="btnCancelSignup" 
            onClick={() => {
              history.push("/")
            }}
            >
              Cancel
            </button>
          </form>
        </div>
        </div>
        <Footer/>
    </div>  
  );
}
}
export default Signup;
