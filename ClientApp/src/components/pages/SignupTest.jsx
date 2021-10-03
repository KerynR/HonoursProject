import React from 'react';
import './SignupTest.css';
import history from '../history';
import Footer from '../Footer';

function formCheck(){
    if (document.getElementById('companyCheck').checked){
        document.getElementById('ifCompany').style.visibility = 'visible';
    }
    else document.getElementById('ifCompany').style.visibility = 'hidden';
}

function SignupTest() {
  return (
    <>
       
        {/*company <input type="radio"  onClick="javascript:formCheck()" name="compRB" id="ifCompany"  />
        <br />
        <div id="ifCompany" style={{"visibility:hidden"}}>
            company form shown here
        </div>

        graduate <input type="radio" onClick="javascript:formCheck();" name="gradRB" id="ifGraduate"/>
        <br />
        <div id="ifGraduate" style={{"visibility:hidden"}}>
            graduate form shown here
        </div>
        
        recruiter <input type="radio" onClick="javascript:formCheck()" name="recRB" id="ifRecruiter" />
        <br />
        <div id="ifRecruiter" style={{"visibility:hidden"}}>
            recruiter form shown here
  </div>*/}

    </>
  );
}

export default SignupTest;

