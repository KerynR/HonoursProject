import React, { useState } from 'react';
import './Login.css';
import Footer from '../../components/Footer';
import { useHistory } from "react-router";

//GOOGLE LOGIN
import {GoogleLogin } from 'react-google-login';

import * as author from "firebase/auth";
import {firebase} from "../../firebase-config"
import { auth } from '../../firebase-config';
import axios, { Axios } from 'axios';

//my clientId from google
const clientId = '619690593220-h60fclv6skikhfqajjpredm31mi54b2e.apps.googleusercontent.com';
const apiUrl='https://localhost:44347/api/';
const http = axios;

function Login() {

  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")

  const loginUser = async() =>{
    try{
      const user = await author.signInWithEmailAndPassword(auth,email,password).then((response) =>{
        const uuid = response.user.uid
        debugger
        localStorage.setItem("userToken",response.user.stsTokenManager.accessToken)
        http.get(`${apiUrl}Auth/SingIn?uuid=${uuid}`).then((response)=>{
          debugger
          if(response != null){
            const userInfo= response.data[0]
            debugger
          localStorage.setItem('email',userInfo.email);
          localStorage.setItem('firstName',userInfo.firstName);
          localStorage.setItem('gender',userInfo.gender);
          localStorage.setItem('profileImg',userInfo.imageUrl);
          localStorage.setItem('lastName',userInfo.lastName);
          localStorage.setItem('roleId',userInfo.roleId)
          localStorage.setItem('mobile',userInfo.mobile);
          localStorage.setItem('userId',userInfo.userId);

          if(userInfo.roleId == 1){
            history.push('/GraduateProfile')
          }
          else if(userInfo.roleId == 2){
            history.push('/RecruiterProfile')
          }
          }
          else{
            alert('User not found in the system. Please register User')
            history.push("/SignUp")
          }
          
        });
      })
    }
    catch(error){
      alert(error.message)
    }
  }
  const  loginGoogleUser = async()=>{
    try{
      const googleProvider= new author.GoogleAuthProvider();
        const user =await author.signInWithPopup(auth,googleProvider).then((response)=>{
          http.post(`${apiUrl}Auth/SingIn`,{uuid:response.user.uid}).then((response)=>{
            debugger
            history.push('/GraduateProfile')
          });
        })
        debugger
    }
    catch(error){
      alert(error.message)
    }
  }
  
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
            <input type="email" id="email" placeholder="Enter your email" onChange={(event)=> setEmail(event.target.value)} />
          </div>
        </div>
                     
        <div className="rowLogin">
          <div class="col25Login">          
            <label className="lblPassword" for="password">Password:</label>
          </div>
          <div className="col75Login">
            <input type="password" id="password" placeholder="Enter your password" onChange={(event) => setPassword(event.target.value)} />
          </div>
        </div>
        <button 
          className="btnLogin" 
          type="button" 
          onClick={loginUser}
          >
            Login
          </button>
                
       
        <button className="btnCancelSignup" type="button" onClick={loginGoogleUser}>Login Using Goolgle</button>
        {/* <div>
          <GoogleLogin className="btnGoogle"
            clientId={clientId}
            buttonText="Sign Up using Google"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            style={{ marginTop: '100px' }}
            isSignedIn={true}
            />
        </div> */}

        <button 
          className="btnCancelLogin" 
          onClick={() => {
          history.push("/");
          }}
        >
          Back
        </button>

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
