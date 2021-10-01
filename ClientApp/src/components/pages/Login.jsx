import React from 'react';
import './Login.css';
import Footer from '../Footer';
import history from '../history';


//GOOGLE LOGIN
import {GoogleLogin } from 'react-google-login';

//my clientId from google
const clientId = '619690593220-h60fclv6skikhfqajjpredm31mi54b2e.apps.googleusercontent.com';


function Login() {
  
  const onSuccess = ( res ) => {
    console.log('[Login Success] currentUser:', res.profileObj);
  };

  const onFailure = ( res ) => {
    console.log('[Login Failed] currentUser:', res);
  };

  return (
    <>
      <body>
    <div form-wrapper>
    <div className="form-container">
      <div className="title_container">
        <h1 >Login</h1>
        <h3>Don't have an account? <a href="/Signup" >Register Here</a> </h3>
        <form >
          
        <div className="row">
          <div class="col-25">    
            <label>Email:</label>
          </div>
          <div className="col-75">
            <input type="email" placeholder="Enter your email"  />
          </div>
        </div>
                     
        <div className="row">
          <div class="col-25">          
            <label>Password:</label>
          </div>
          <div className="col-75">
            <input type="password" placeholder="Enter your password"  />
          </div>
        </div>
        <input className="btnLogin" type="submit" value="Login" />
                
       

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

        <button className="btnCancel" variant="btn btn-success" onClick={() => history.push('/')}>Cancel</button>

    </form>
        
      </div>
      </div>
    </div>  
    </body>
    <Footer/>
    </>
  );
}

export default Login;
