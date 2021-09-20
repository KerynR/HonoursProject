import React from 'react';
import './Signup.css';

function Signup() {
  return (
    <div form-wrapper>
    <div className="form-container">
      <div class="title_container">
        <h1>Register</h1>
        <form action="action_page.php">
          <div className="row">
            <div class="col-25">
              <label for="fname">First Name</label>
            </div>
            <div className="col-75">
              <input type="text" placeholder="First Name"  />
            </div>
          </div>

        <div className="row">
          <div class="col-25">
            <label>Last Name</label>
          </div>
          <div className="col-75">
            <input type="text" placeholder="Surname"  />
          </div>
        </div>

        <div className="row">
          <div class="col-25">    
            <label>Email</label>
          </div>
          <div className="col-75">
            <input type="email" placeholder="Email"  />
          </div>
        </div>
          
        <div className="row">
          <div class="col-25">   
            <label>Password</label>
          </div>
          <div className="col-75">
            <input type="password" placeholder="Password"  />
          </div>
        </div>
            
        <div className="row">
          <div class="col-25">          
            <label>Confirm Password</label>
          </div>
          <div className="col-75">
            <input type="password" placeholder="Re-enter Password"  />
          </div>
        </div>
        <input className="buttonSub" type="submit" value="Register" />
        </form>
      </div>
      </div>
    </div>  
  );
}

export default Signup;
