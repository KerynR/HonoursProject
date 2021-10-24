import React,{useState} from 'react';
import './EditRecruiterProfile.css';
import Footer from '../Footer';
import history from '../history';


{/** EDIT RECRUITER PROFILE */}

function EditRecruiterProfile() {
  const[firstName,setFirstName] = useState(localStorage.getItem("firstName"))
    const[lastName,setLastName] = useState(localStorage.getItem("lastName"))
    const[email,setEmail] = useState(localStorage.getItem("email"))
    const[mobile,setMobile] = useState(localStorage.getItem("mobile"))
    const[gender,setGender] = useState(localStorage.getItem("gender"))
    const[company,setCompanyName] = useState("TransformIT")
  return (
    <>
    <div form-wrapper>
    <div className="form-container-editRec">
      <div className="title_container-editRec">
        <h1 className="h1EditRecProf">Edit Profile</h1>
        <form>

        <div className="rowEditRec">
          <div className="col-25-editRec">    
            <label className="lblRecName">First Name:</label>
          </div>
          <div className="col-75-editRec">
            <input type="text" placeholder="e.g. Harry"  value={firstName}/>
          </div>
        </div> 
        <div className="rowEditRec">
          <div className="col-25-editRec">    
            <label className="lblRecLName">Last Name:</label>
          </div>
          <div className="col-75-editRec">
            <input type="text" placeholder="e.g. Potter"  value={lastName}/>
          </div>
        </div> 
        <div className="rowEditRec">
          <div className="col-25-editRec">          
            <label className="lblRecGender">Gender:</label>
          </div>
          <div className="col-75-editRec">
            <input type="text" placeholder="e.g. Male" value={gender} />
          </div>
        </div>
        <div className="rowEditRec">
          <div className="col-25-editRec">    
            <label className="lblRecMobile">Mobile:</label>
          </div>
          <div className="col-75-editRec">
            <input type="tel" placeholder="e.g. 093 463 4664" value={mobile} />
          </div>
        </div>
        
        <div className="rowEditRec">
          <div className="col-25-editRec">    
            <label className="lblRecEmail">Email:</label>
          </div>
          <div className="col-75-editRec">
            <input type="email" placeholder="e.g. harrypotter@gmail.com" value={email} />
          </div>
        </div>
                  
        <button className="btnSaveRecProf" variant="btn btn-success" onClick={() => history.push('/RecruiterProfile')}>Save</button>          
        <button className="btnDeleteRecProf" variant="btn btn-success" onClick={() => history.push('/')}>Delete Profile</button>          
        <button className="btnCancelRecProf" variant="btn btn-success" onClick={() => history.push('/RecruiterProfile')}>Cancel</button>          

        </form>
        
      </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default EditRecruiterProfile;
