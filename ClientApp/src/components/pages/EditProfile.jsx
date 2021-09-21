import React from 'react';
import './EditProfile.css';
import Footer from '../Footer';


function EditProfile() {
  return (
    <>
    <div form-wrapper>
    <div className="form-container">
      <div class="title_container">
        <h1>Edit Profile</h1>
        <form action="action_page.php">

        <div className="row">
          <div class="col-25">    
            <label>Full Name:</label>
          </div>
          <div className="col-75">
            <input type="text" placeholder="..."  />
          </div>
        </div> 

        <div className="row">
          <div class="col-25">    
            <label>Email:</label>
          </div>
          <div className="col-75">
            <input type="email" placeholder="email"  />
          </div>
        </div>
                     
        <div className="row">
          <div class="col-25">          
            <label>Location:</label>
          </div>
          <div className="col-75">
            <input type="text" placeholder="..."  />
          </div>
        </div>

        <div className="row">
          <div class="col-25">          
            <label>About Me:</label>
          </div>
          <div className="col-75">
            <input type="text" placeholder="..."  />
          </div>
        </div>

        <div className="row">
          <div class="col-25">          
            <label>Education:</label>
          </div>
          <div className="col-75">
            <input type="text" placeholder="..."  />
          </div>
        </div>

        <input className="btnSave" type="submit" value="Save" />
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
