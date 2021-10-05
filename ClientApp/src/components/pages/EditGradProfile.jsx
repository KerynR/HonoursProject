import React from 'react';
import './EditGradProfile.css';
import Footer from '../Footer';
import history from '../history';

{/* EDIT GRADUATE PROFILE PAGE */}

function EditGradProfile() {
  return (
    <>
    <div form-wrapper-editGradProf>
    <div className="form-container-editGradProf">
      <div className="title_container-editGradProf">
        <h1>Edit Profile</h1>
        <form>

        <div className="rowEditGradProf">
          <div className="col-25-editGradProf">    
            <label className="lblGradName">First Name:</label>
          </div>
          <div className="col-75-editGradProf">
            <input type="text" placeholder="e.g. Harry"  />
          </div>
        </div> 
        <div className="rowEditGradProf">
          <div className="col-25-editGradProf">    
            <label className="lblGradLName">Last Name:</label>
          </div>
          <div className="col-75-editGradProf">
            <input type="text" placeholder="e.g. Potter"  />
          </div>
        </div> 
        <div className="rowEditGradProf">
          <div className="col-25-editGradProf">          
            <label className="lblGradGender">Gender:</label>
          </div>
          <div className="col-75-editGradProf">
            <input type="text" placeholder="e.g. Male"  />
          </div>
        </div>
        <div className="rowEditGradProf">
          <div className="col-25-editGradProf">    
            <label className="lblGradMobile">Mobile:</label>
          </div>
          <div className="col-75-editGradProf">
            <input type="tel" placeholder="e.g. 093 463 4664"  />
          </div>
        </div>
        
        <div className="rowEditGradProf">
          <div className="col-25-editGradProf">    
            <label className="lblGradEmail">Email:</label>
          </div>
          <div className="col-75-editGradProf">
            <input type="email" placeholder="e.g. harrypotter@gmail.com"  />
          </div>
        </div>
                  
        <button className="btnSaveGradProf" variant="btn btn-success" onClick={() => history.push('/GraduateProfile')}>Save</button>          
        <button className="btnDeleteGradProf" variant="btn btn-success" onClick={() => history.push('/GraduateProfile')}>Delete Profile</button>          
        <button className="btnCancelGradProf" variant="btn btn-success" onClick={() => history.push('/GraduateProfile')}>Cancel</button>          

        </form>
        
      </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default EditGradProfile;
