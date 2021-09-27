import React from 'react';
import './CompanyProfile.css';


function CompanyProfile() {
  return (
    <>
        <div form-wrapper>
    <div className="form-container">
      <div class="title_container">
        <h1>Company Profile</h1>
        <form >

        <div className="row">
          <div class="col-25">    
            <label>Company Name:</label>
          </div>
          <div className="col-75">
            <input type="text" placeholder="..."  />
          </div>
        </div> 

        <div className="row">
          <div class="col-25">    
            <label>Sector:</label>
          </div>
          <div className="col-75">
            <input type="text" placeholder="..."  />
          </div>
        </div>
                     
        <div className="row">
          <div class="col-25">          
            <label>Vision:</label>
          </div>
          <div className="col-75">
            <input type="text" placeholder="..."  />
          </div>
        </div>

        <div className="row">
          <div class="col-25">          
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
    
    </>
    
  );
}

export default CompanyProfile;
