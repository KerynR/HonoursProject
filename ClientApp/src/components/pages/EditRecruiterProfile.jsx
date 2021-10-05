import React from 'react';
import './EditRecruiterProfile.css';
import Footer from '../Footer';


function EditRecruiterProfile() {
  return (
    <>
    <div form-wrapper>
    <div className="form-container-editRec">
      <div className="title_container-editRec">
        <h1 className="h1EditRecProf">Edit Recruiter Profile</h1>
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
                  
        <input className="btnSaveRecProf" type="submit" value="Save" />
        <input className="btnDeleteRecProf" type="submit" value="Delete Profile" />
        <input className="btnCancelRecProf" type="submit" value="Cancel" />

        </form>
        
      </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default EditRecruiterProfile;
