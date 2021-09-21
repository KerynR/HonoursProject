import React from 'react';
import './CreatePosition.css';
import Footer from '../Footer';


function CreatePosition() {
  return (
    <>
    <div form-wrapper>
    <div className="form-container">
      <div class="title_container">
        <h1>Create New Position</h1>
        <form action="action_page.php">

        <div className="row">
          <div class="col-25">    
            <label>Employer:</label>
          </div>
          <div className="col-75">
            <input type="text" placeholder="..."  />
          </div>
        </div> 

        <div className="row">
          <div class="col-25">    
            <label>Reference Code:</label>
          </div>
          <div className="col-75">
            <input type="text" placeholder="..."  />
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
            <label>Salary:</label>
          </div>
          <div className="col-75">
            <input type="text" placeholder="..."  />
          </div>
        </div> 

        <div className="row">
          <div class="col-25">    
            <label>Job Type:</label>
          </div>
          <div className="col-75">
            <input type="text" placeholder="..."  />
          </div>
        </div> 

        <div className="row">
          <div class="col-25">    
            <label>Start Date:</label>
          </div>
          <div className="col-75">
            <input type="date" placeholder="..."  />
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
            <label>Duties and Responsibilities:</label>
          </div>
          <div className="col-75">
            <input type="text" placeholder="..."  />
          </div>
        </div> 

        <div className="row">
          <div class="col-25">    
            <label>Skills and Competencies:</label>
          </div>
          <div className="col-75">
            <input type="text" placeholder="..."  />
          </div>
        </div>
                     
        <div className="row">
          <div class="col-25">    
            <label>Minimum Requirements:</label>
          </div>
          <div className="col-75">
            <input type="text" placeholder="..."  />
          </div>
        </div> 

        
        <input className="btnPostPos" type="submit" value="Post Position" />
        <input className="btnCancel" type="submit" value="Cancel" />

        </form>
        
      </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default CreatePosition;
