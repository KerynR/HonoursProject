import React from 'react';
import './EditProfile.css';
import Footer from '../Footer';


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
                  
        <input className="btnSave" type="submit" value="Save" />
        <input className="btnDelete" type="submit" value="Delete Profile" />
        <input className="btnCancel" type="submit" value="Cancel" />

        </form>
        
      </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default EditProfile;
