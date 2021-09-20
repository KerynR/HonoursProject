import React from 'react';
import './Signup.css';

function Signup() {
  return (
    <div form-wrapper>
    <div className="form-container">
      <div class="title_container">
        <h1>Create Account</h1>
        <h3>Already have an account?</h3><a href="#">Login</a> 
        <form action="action_page.php">
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
        <p>Check the one that applies to you:</p>

        <input type="checkbox" /><p >Employer</p>
        <input type="checkbox" /><p >Graduate</p>
        
        <input className="btnSignup" type="submit" value="Register" />
        
        <p>or</p><br/><p>Sign up with</p>

          <a href="#"><i class="fa fa-google"></i></a>
          <a href="#"><i class="fa fa-facebook-official"></i></a>
          <a href="#"><i class="fa fa-linkedin-square"></i></a>
        
        </form>
      </div>
      </div>
    </div>  
  );
}

export default Signup;
