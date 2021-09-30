import React from 'react';
import './testing.css';
import Footer from '../Footer';

//GOOGLE LOGIN
import {GoogleLogin } from 'react-google-login';

//my clientId from google
const clientId = '619690593220-h60fclv6skikhfqajjpredm31mi54b2e.apps.googleusercontent.com';

function testing() {

  const onSuccess = ( res ) => {
    console.log('[Login Success] currentUser:', res.profileObj);
  };

  const onFailure = ( res ) => {
    console.log('[Login Failed] currentUser:', res);
  };

  return (
        

<div class="login-wrap">
  <div class="login-html">
    <input id="tab-1" type="radio" name="tab" class="sign-in" checked/><label for="tab-1" class="tab">Sign In</label>
    <input id="tab-2" type="radio" name="tab" class="sign-up"/><label for="tab-2" class="tab">Sign Up</label>
    {/* LOGIN PAGE */}
    <div class="login-form">
      <div class="sign-in-htm">
        <div class="group">
          <label for="user" class="label">Username</label>
          <input id="user" type="text" class="input"/>
        </div>
        <div class="group">
          <label for="pass" class="label">Password</label>
          <input id="pass" type="password" class="input" data-type="password"/>
        </div>
        <div class="group">
          <input id="check" type="checkbox" class="check" checked/>
          <label for="check"><span class="icon"></span> Keep me Signed in</label>
        </div>
        <div class="group">
          <input type="submit" class="button" value="Sign In"/>
        </div>
        <div>
          <label>OR</label>
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
        </div>
        <div class="hr"></div>
        <div class="foot-lnk">
          <a href="#forgot">Forgot Password?</a>
        </div>

        

      </div>
      {/* REGISTER PAGE */}
      <div className="sign-up-htm">
        <div className="group">
          <label for="user" class="label">Username</label>
          <input id="user" type="text" className="input"/>
        </div>
        <div className="group">
          <label for="pass" class="label">Email Address</label>
          <input id="pass" type="text" className="input"/>
        </div>
        <div className="group">
          <label for="pass" class="label">Password</label>
          <input id="pass" type="password" className="input" data-type="password"/>
        </div>
        <div className="group">
          <label for="pass" class="label">Confirm Password</label>
          <input id="pass" type="password" className="input" data-type="password"/>
        </div>
        <div className="group">
          
        <label >Please select the option that applies to you:</label>
         <ul>
           <li className="listOptions">
          {/*<input id="cbGraduate" type="checkbox" className="cbGraduate" />*/}
          <label for="cbGraduate">Graduate</label><br />
          </li>
          <li>
          {/*<input id="cbRecruiter" type="checkbox" className="cbRecruiter"/>*/}
          <label for="cbRecruiter">Recruiter</label><br />
          </li>
          <li>
          {/*<input id="cbCompany" type="checkbox" className="cbCompany" />*/}
          <label for="cbCompany">Company</label>
          </li>
          </ul>
         
        </div>
        <div className="group">
          <input type="submit" className="button" value="Sign Up"/>
        </div>
        <div>
          <label>OR</label>
          <div>
          <GoogleLogin className="btnGoogle"
            clientId={clientId}
            buttonText="Sign Up using Google"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            style={{ marginTop: '100px' }}
            isSignedIn={true}
            />
        </div>
        </div>
        <div className="hr"></div>
        <div className="foot-lnk">
          <label for="tab-1">Already a member? Sign In</label>
        </div>
      </div>
    </div>
  </div>
</div>


  );
}

export default testing;
