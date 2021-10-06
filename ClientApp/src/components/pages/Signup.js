import React from 'react';
import './Signup.css';
import history from '../history';

//GOOGLE LOGIN
import {GoogleLogin } from 'react-google-login';

//my clientId from google
const clientId = '619690593220-h60fclv6skikhfqajjpredm31mi54b2e.apps.googleusercontent.com';

//GREY OUT TEXBOXES DEPENDING ON RADIO BUTTON SELECTED
function EnableDisableTextbox(){
  var chkYes = document.getElementById("chkYes");
  var txtSector = document.getElementById("txtSector");
  txtSector.disabled = chkYes.checked ? false : true;
    if (!txtSector.disabled){
      txtSector.focus();
    }
}

function Signup() {

  const onSuccess = ( res ) => {
    console.log('[Login Success] currentUser:', res.profileObj);
  };

  const onFailure = ( res ) => {
    console.log('[Login Failed] currentUser:', res);
  };

  return (
    <div form-wrapper>
    <div className="form-container-signup">
      <div class="title_container-signup">
        <h1>Create Account</h1>
        <h3>Already have an account? <a href="/Login" >Login Here</a> </h3> 
        <br />
        <form>
         <h4>Select the account type that applies to you:</h4>
         <div className="radioAccType">
          <input name="radAccTypeChoice" id="chkYes" type="radio" onClick="EnableDisableTextbox()" />
          <label for="radioGrad">Graduate</label>
          <input name="radAccTypeChoice" id="chkYes" type="radio" onClick="EnableDisableTextbox()" />
          <label for="radioRec">Recruiter</label>
          <input name="radAccTypeChoice" id="radioComp" type="radio" value="Company" />
          <label for="radioComp">Company</label>
        </div>

            {/** GRADUATE/RECRUITER/COMPANY */}
            <div className="rowSignup">
              <div class="col25Signup">
                <label className="lblFName" for="fname">First Name:</label>
              </div>
              <div className="col75Signup">
                <input type="text" id="" placeholder="First Name or Company Name"  />
              </div>
            </div>

          {/** GRADUATE/RECRUITER */}
          <div className="rowSignup">
            <div class="col25Signup">
              <label className="lblLName" for="lname">Last Name:</label>
            </div>
            <div className="col75Signup">
              <input type="text" id="" placeholder="Surname"  />
            </div>
          </div>

          {/** GRADUATE/RECRUITER/COMPANY */}
          <div className="rowSignup">
            <div class="col25Signup">    
              <label className="lblEmail" for="email">Email:</label>
            </div>
            <div className="col75Signup">
              <input type="email" id="" placeholder="Email"  />
            </div>
          </div>

          {/** GRADUATE/RECRUITER */}
          <div className="rowSignup">
            <div class="col25Signup">    
              <label className="lblDOB" for="dob">Date of Birth:</label>
            </div>
            <div className="col75Signup">
              <input type="date" id="" placeholder="Email"  />
            </div>
          </div>

          {/** GRADUATE/RECRUITER */}
          <div className="rowSignup">
            <div class="col25Signup">    
              <label className="" for="gender">Gender:</label>
            </div>
            <div className="col75Signup">
              <input type="text" id="" placeholder="e.g. male, female or other"  />
            </div>
          </div>

          {/** GRADUATE/RECRUITER */}
          <div className="rowSignup">
            <div class="col25Signup">    
              <label className="lblMobile" for="mobile">Mobile:</label>
            </div>
            <div className="col75Signup">
              <input type="tel" id="" placeholder="Contact Number"  />
            </div>
          </div>

          {/** COMPANY */}
          <div className="rowSignup">
            <div class="col25Signup">    
              <label className="lblSector" for="sector">Sector:</label>
            </div>
            <div className="col75Signup">
              <input type="text" id="txtSector" placeholder="E.g. Marketing"  />
            </div>
          </div>

          {/** COMPANY */}
          <div className="rowSignup">
            <div class="col25Signup">    
              <label className="lblVision" for="vision">Vision:</label>
            </div>
            <div className="col75Signup">
              <input type="text" id="" placeholder="..."  />
            </div>
          </div>

          {/** COMPANY */}
          <div className="rowSignup">
            <div class="col25Signup">    
              <label className="lblMission" for="mission">Mission:</label>
            </div>
            <div className="col75Signup">
              <input type="text" id="" placeholder="..."  />
            </div>
          </div>
            
          {/** GRADUATE/RECRUITER/COMPANY */}  
          <div className="rowSignup">
            <div class="col25Signup">   
              <label className="lblPassword" for="password">Password:</label>
            </div>
            <div className="col75Signup">
              <input type="password" id="" placeholder="Password"  />
            </div>
          </div>
              
          {/** GRADUATE/RECRUITER/COMPANY */}    
          <div className="rowSignup">
            <div class="col25Signup">          
              <label className="lblConfirmPassword" for="confirmpassword">Confirm Password:</label>
            </div>
            <div className="col75Signup">
              <input type="password" id="" placeholder="Re-enter Password"  />
            </div>
          </div>          
           <input className="btnSignup" type="submit" value="Register" />
            <div>
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
           <button className="btnCancelSignup" variant="btn btn-success" onClick={() => history.push('/')}>Cancel</button>
          </form>
        </div>
        </div>
    </div>  
  );
}

export default Signup;
