import React from 'react';
import './Login.css';
import Footer from '../Footer';

function Login() {
  return (
    <>
      <body>
          
      
    <div form-wrapper>
    <div className="form-container">
      <div class="title_container">
        <h1>Login</h1>
        <form action="action_page.php">
          
        <div className="row">
          <div class="col-25">    
            <label>Email:</label>
          </div>
          <div className="col-75">
            <input type="email" placeholder="email"  />
          </div>
        </div>
                     
        <div className="row">
          <div class="col-25">          
            <label>Password:</label>
          </div>
          <div className="col-75">
            <input type="password" placeholder="enter password"  />
          </div>
        </div>
        <input className="btnLogin" type="submit" value="Login" />
        
        <input type="checkbox" /><p >Remember Me</p>

        <a href="#">Forgot Password</a>
        <br />
        <p  className="">Don't have an account?</p><a href="#">Sign up here</a>
        <br />
        <p>or</p>
        <br />
        <p>Sign in with</p>

            <a href="#"><i class="fa fa-google"></i></a>
            <a href="#"><i class="fa fa-facebook-official"></i></a>
            <a href="#"><i class="fa fa-linkedin-square"></i></a>
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
