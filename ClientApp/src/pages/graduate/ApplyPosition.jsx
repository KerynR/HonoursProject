import React from 'react';
import './ApplyPosition.css';
import Footer from '../../components/Footer';


function ApplyPosition() {
  return (
    <>
    <div form-wrapper>
    <div className="form-container-ApplyPos">
      <div className="title_container-ApplyPos">
        <h1>Position Details</h1>
        <form>

        <div className="rowApplyPos">
          <div className="col-25-ApplyPos">    
            <label className="lblEmployerApplyPos">Employer:</label>
          </div>
          <div className="col-75-ApplyPos">
          <label ></label>
          </div>
        </div> 

        <div className="rowApplyPos">
          <div className="col-25-ApplyPos">    
            <label className="lblLocationApplyPos">Location:</label>
          </div>
          <div className="col-75-ApplyPos">
          <label ></label>
          </div>
        </div> 

        <div className="rowApplyPos">
          <div className="col-25-ApplyPos">    
            <label className="lblSalaryApplyPos">Salary:</label>
          </div>
          <div className="col-75-ApplyPos">
          <label ></label>
          </div>
        </div> 

        <div className="rowApplyPos">
          <div className="col-25-ApplyPos">    
            <label className="lblJobTypeApplyPos">Job Type:</label>
          </div>
          <div className="col-75-ApplyPos">
          <label ></label>
          </div>
        </div> 

        <div className="rowApplyPos">
          <div className="col-25-ApplyPos">    
            <label className="lblStartDateApplyPos">Start Date:</label>
          </div>
          <div className="col-75-ApplyPos">
          <label ></label>
          </div>
        </div> 

        <div className="rowApplyPos">
          <div className="col-25-ApplyPos">    
            <label className="lblSectorApplyPos">Sector:</label>
          </div>
          <div className="col-75-ApplyPos">
          <label ></label>
          </div>
        </div> 

        <div className="rowApplyPos">
          <div className="col-25-ApplyPos">    
            <label className="lblDutiesRespApplyPos">Duties & Responsibilities:</label>
          </div>
          <div className="col-75-ApplyPos">
          <label ></label>
          </div>
        </div> 

        <div className="rowApplyPos">
          <div className="col-25-ApplyPos">    
            <label className="lblSkillsCompApplyPos">Skills & Competencies</label>
          </div>
          <div className="col-75-ApplyPos">
          <label ></label>
          </div>
        </div> 
                     
        <div className="rowApplyPos">
          <div className="col-25-ApplyPos">    
            <label className="lblMinReqApplyPos">Minimum Requirements:</label>
          </div>
          <div className="col-75-ApplyPos">
          <label ></label>
          </div>
        </div> 

        
        <input className="btnApplyPos" type="submit" value="Apply" />
        <input className="btnCancelPos" type="submit" value="Cancel" />

        </form>
        
      </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default ApplyPosition;
