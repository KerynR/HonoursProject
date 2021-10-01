import React from 'react';
import './Signup.css';
import history from '../history';


function Signup() {
  return (
    <div form-wrapper>
    <div className="form-container">
      <div class="title_container">
        <h1>Create Account</h1>
        <h3>Already have an account? <a href="/Login" >Login Here</a> </h3> 
        <br />
        <form>
         <h4>Select the account type that applies to you:</h4>
         <div className="cbAccType">
          <input id="cbAccount" type="checkbox" value="Graduate"/>
          <label for="cbAccount">Graduate</label>
          <input id="cbAccount" type="checkbox" value="Recruiter"/>
          <label for="cbAccount">Recruiter</label>
          <input id="cbAccount" type="checkbox" value="Company"/>
          <label for="cbAccount">Company</label>
        </div>
            <div className="row">
              <div class="col-25">
                <label for="fname">First Name:</label>
              </div>
              <div className="col-75">
                <input type="text" placeholder="First Name"  />
              </div>
            </div>

          <div className="row">
            <div class="col-25">
              <label>Last Name:</label>
            </div>
            <div className="col-75">
              <input type="text" placeholder="Surname"  />
            </div>
          </div>

          <div className="row">
            <div class="col-25">    
              <label>Email:</label>
            </div>
            <div className="col-75">
              <input type="email" placeholder="Email"  />
            </div>
          </div>
            
          <div className="row">
            <div class="col-25">   
              <label>Password:</label>
            </div>
            <div className="col-75">
              <input type="password" placeholder="Password"  />
            </div>
          </div>
              
          <div className="row">
            <div class="col-25">          
              <label>Confirm Password:</label>
            </div>
            <div className="col-75">
              <input type="password" placeholder="Re-enter Password"  />
            </div>
          </div>          
           <input className="btnSignup" type="submit" value="Register" />
           <button className="btnCancel" variant="btn btn-success" onClick={() => history.push('/')}>Cancel</button>
          </form>
        </div>
        </div>
    </div>  
  );
}

export default Signup;
