import React from 'react';
import './EditCompanyProfile.css';
import Footer from '../Footer';


function EditCompanyProfile() {
  return (
    <>
        <div form-wrapper>
    <div className="form-container">
      <div className="title_container">
        <h1>Edit Company Profile</h1>
        <form >

        <div className="row">
          <div className="col-25">    
            <label>Company Name:</label>
          </div>
          <div className="col-75">
            <input type="text" placeholder="..."  />
          </div>
        </div> 

        <div className="row">
          <div className="col-25">    
            <label>Sector:</label>
          </div>
          <div className="col-75">
            <input type="text" placeholder="..."  />
          </div>
        </div>
                     
        <div className="row">
          <div className="col-25">          
            <label>Vision:</label>
          </div>
          <div className="col-75">
            <input type="text" placeholder="..."  />
          </div>
        </div>

        <div className="row">
          <div className="col-25">          
            <label>Mission:</label>
          </div>
          <div className="col-75">
            <input type="text" placeholder="..."  />
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

export default EditCompanyProfile;
