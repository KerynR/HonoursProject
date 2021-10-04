import React from 'react';
import './EditProfile.css';
import Footer from '../Footer';
import history from '../history';



function EditProfile() {
  return (
    <>
    <div form-wrapper>
    <div className="form-container">
      <div className="title_container">
        <h1>Edit Profile</h1>
        <form>

        <div className="row">
          <div className="col-25">    
            <label>First Name:</label>
          </div>
          <div className="col-75">
            <input type="text" placeholder="e.g. Harry"  />
          </div>
        </div> 
        <div className="row">
          <div className="col-25">    
            <label>Last Name:</label>
          </div>
          <div className="col-75">
            <input type="text" placeholder="e.g. Potter"  />
          </div>
        </div> 
        <div className="row">
          <div className="col-25">          
            <label>Gender:</label>
          </div>
          <div className="col-75">
            <input type="text" placeholder="e.g. Male"  />
          </div>
        </div>
        <div className="row">
          <div className="col-25">    
            <label>Mobile:</label>
          </div>
          <div className="col-75">
            <input type="tel" placeholder="e.g. 093 463 4664"  />
          </div>
        </div>
        
        <div className="row">
          <div className="col-25">    
            <label>Email:</label>
          </div>
          <div className="col-75">
            <input type="email" placeholder="e.g. harrypotter@gmail.com"  />
          </div>
        </div>
                  
        <button className="btnSave" variant="btn btn-success" onClick={() => history.push('/GraduateProfile')}>Save</button>          
        <button className="btnDelete" variant="btn btn-success" onClick={() => history.push('/GraduateProfile')}>Delete Profile</button>          
        <button className="btnCancel" variant="btn btn-success" onClick={() => history.push('/GraduateProfile')}>Cancel</button>          

        </form>
        
      </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default EditProfile;
