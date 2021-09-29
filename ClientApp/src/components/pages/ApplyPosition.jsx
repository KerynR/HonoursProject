import React from 'react';
import './ApplyPosition.css';
import Footer from '../Footer';


function ApplyPosition() {
  return (
    <>
    <div form-wrapper>
    <div className="form-container">
      <div className="title_container">
        <h1>Position Details</h1>
        <form>

        <div className="row">
          <div className="col-25">    
            <label>Employer:</label>
          </div>
          <div className="col-75">
          <input className="inputPosDetails" type="text" />
          </div>
        </div> 

        <div className="row">
          <div className="col-25">    
            <label>Reference Code:</label>
          </div>
          <div className="col-75">
          <input type="text" />
          </div>
        </div> 

        <div className="row">
          <div className="col-25">    
            <label>Location:</label>
          </div>
          <div className="col-75">
          <input type="text" />
          </div>
        </div> 

        <div className="row">
          <div className="col-25">    
            <label>Salary:</label>
          </div>
          <div className="col-75">
          <input type="text" />
          </div>
        </div> 

        <div className="row">
          <div className="col-25">    
            <label>Job Type:</label>
          </div>
          <div className="col-75">
          <input type="text" />
          </div>
        </div> 

        <div className="row">
          <div className="col-25">    
            <label>Start Date:</label>
          </div>
          <div className="col-75">
          <input type="text" />
          </div>
        </div> 

        <div className="row">
          <div className="col-25">    
            <label>Sector:</label>
          </div>
          <div className="col-75">
          <input type="text" />
          </div>
        </div> 

        <div className="row">
          <div className="col-25">    
            <label>Duties and Responsibilities:</label>
          </div>
          <div className="col-75">
          <input type="text" />
          </div>
        </div> 

        <div className="row">
          <div className="col-25">    
            <label>Skills and Competencies</label>
          </div>
          <div className="col-75">
          <input type="text" />
          </div>
        </div> 
                     
        <div className="row">
          <div className="col-25">    
            <label>Minimum Requirements:</label>
          </div>
          <div className="col-75">
          <input type="text" />
          </div>
        </div> 

        
        <input className="btnApply" type="submit" value="Apply" />
        <input className="btnUpdate" type="submit" value="Update" />
        <input className="btnCancel" type="submit" value="Cancel" />

        </form>
        
      </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default ApplyPosition;
