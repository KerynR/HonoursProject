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
    <div className="form-container-login">
      <div className="title_container-login">
        <h1 >Login</h1>
        <h3>Don't have an account? <a href="/Signup" >Register Here</a> </h3>
        <form >
          
        <div className="rowLogin">
          <div class="col25Login">    
            <label className="lblEmail" for="email">Email:</label>
          </div>
          <div className="col75Login">
            <input type="email" id="email" placeholder="Enter your email"  />
          </div>
        </div>
                     
        <div className="rowLogin">
          <div class="col25Login">          
            <label className="lblPassword" for="password">Password:</label>
          </div>
          <div className="col75Login">
            <input type="password" id="password" placeholder="Enter your password"  />
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

        <button className="btnCancelLogin" variant="btn btn-success" onClick={() => history.push('/')}>Cancel</button>

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
