import React from 'react';
import './EditRecruiterProfile.css';
import Footer from '../Footer';
import history from '../history';


{/** EDIT RECRUITER PROFILE */}

function EditRecruiterProfile() {
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
            <input type="text" placeholder="e.g. Harry"  />
          </div>
        </div> 
        <div className="rowEditRec">
          <div className="col-25-editRec">    
            <label className="lblRecLName">Last Name:</label>
          </div>
          <div className="col-75-editRec">
            <input type="text" placeholder="e.g. Potter"  />
          </div>
        </div> 
        <div className="rowEditRec">
          <div className="col-25-editRec">          
            <label className="lblRecGender">Gender:</label>
          </div>
          <div className="col-75-editRec">
            <input type="text" placeholder="e.g. Male"  />
          </div>
        </div>
        <div className="rowEditRec">
          <div className="col-25-editRec">    
            <label className="lblRecMobile">Mobile:</label>
          </div>
          <div className="col-75-editRec">
            <input type="tel" placeholder="e.g. 093 463 4664"  />
          </div>
        </div>
        
        <div className="rowEditRec">
          <div className="col-25-editRec">    
            <label className="lblRecEmail">Email:</label>
          </div>
          <div className="col-75-editRec">
            <input type="email" placeholder="e.g. harrypotter@gmail.com"  />
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
