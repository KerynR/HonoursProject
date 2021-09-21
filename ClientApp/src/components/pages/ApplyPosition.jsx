import React from 'react';
import './ApplyPosition.css';


function ApplyPosition() {
  return (
    <div form-wrapper>
    <div className="form-container">
      <div class="title_container">
        <h1>Position Details</h1>
        <form action="action_page.php">

        <div className="row">
          <div class="col-25">    
            <label>Employer:</label>
          </div>
          <div className="col-75">
          <label>______________________________</label>
          </div>
        </div> 

        <div className="row">
          <div class="col-25">    
            <label>Reference Code:</label>
          </div>
          <div className="col-75">
          <label>______________________________</label>
          </div>
        </div> 

        <div className="row">
          <div class="col-25">    
            <label>Location:</label>
          </div>
          <div className="col-75">
          <label>______________________________</label>
          </div>
        </div> 

        <div className="row">
          <div class="col-25">    
            <label>Salary:</label>
          </div>
          <div className="col-75">
          <label>______________________________</label>
          </div>
        </div> 

        <div className="row">
          <div class="col-25">    
            <label>Job Type:</label>
          </div>
          <div className="col-75">
          <label>______________________________</label>
          </div>
        </div> 

        <div className="row">
          <div class="col-25">    
            <label>Start Date:</label>
          </div>
          <div className="col-75">
          <label>______________________________</label>
          </div>
        </div> 

        <div className="row">
          <div class="col-25">    
            <label>Sector:</label>
          </div>
          <div className="col-75">
          <label>______________________________</label>
          </div>
        </div> 

        <div className="row">
          <div class="col-25">    
            <label>Duties and Responsibilities:</label>
          </div>
          <div className="col-75">
            <ul>
                <li>_____________</li>
                <li>_____________</li>
                <li>_____________</li>
            </ul>
          </div>
        </div> 

        <div className="row">
          <div class="col-25">    
            <label>Skills and Competencies</label>
          </div>
          <div className="col-75">
            <ul>
                <li>_____________</li>
                <li>_____________</li>
                <li>_____________</li>
            </ul>
          </div>
        </div> 
                     
        <div className="row">
          <div class="col-25">    
            <label>Minimum Requirements:</label>
          </div>
          <div className="col-75">
          <ul>
                <li>_____________</li>
                <li>_____________</li>
                <li>_____________</li>
            </ul>
          </div>
        </div> 

        
        <input className="btnApply" type="submit" value="Apply" />
        <input className="btnCancel" type="submit" value="Cancel" />

        </form>
        
      </div>
      </div>
    </div>
  );
}

export default ApplyPosition;
