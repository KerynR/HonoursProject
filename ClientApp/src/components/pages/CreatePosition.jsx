import React from 'react';
import './CreatePosition.css';
import Footer from '../Footer';
import history from '../history';


{/* COMPANIES AND RECRUITERS CAN CREATE JOB VACANCIES HERE */}

function CreatePosition() {
  return (
    <>
    <div form-wrapper-CreatePos>
    <div className="form-container-CreatePos">
      <div class="title_container-CreatePos">
        <h1>Create New Position</h1>
        <form>

        <div className="rowCreatePos">
          <div class="col-25-CreatePos">    
            <label className="lblVacName">Vacancy Name:</label>
          </div>
          <div className="col-75-CreatePos">
            <input type="text" placeholder=""  />
          </div>
        </div> 

        <div className="rowCreatePos">
          <div class="col-25-CreatePos">    
            <label className="lblJobTitle">Job Title:</label>
          </div>
          <div className="col-75-CreatePos">
            <input type="text" placeholder=""  />
          </div>
        </div> 
        <div className="rowCreatePos">
          <div class="col-25-CreatePos">    
            <label className="lblStartDate">Start Date:</label>
          </div>
          <div className="col-75-CreatePos">
            <input type="date" placeholder=""  />
          </div>
        </div>

        <div className="rowCreatePos">
          <div class="col-25-CreatePos">    
            <label className="lblJobDescr">Job Description:</label>
          </div>
          <div className="col-75-CreatePos">
          <textarea name="txtAreaCPJobDes" rows="5" cols="50" type="text" placeholder="" ></textarea>

          </div>
        </div> 

        <div className="rowCreatePos">
          <div class="col-25-CreatePos">    
            <label className="lblJobLoc">Location:</label>
          </div>
          <div className="col-75-CreatePos">
            <input type="text" placeholder=""  />
          </div>
        </div> 

        <div className="rowCreatePos">
          <div class="col-25-CreatePos">    
            <label lblJobCloseDate>Closing Date:</label>
          </div>
          <div className="col-75-CreatePos">
            <input type="date" placeholder=""  />
          </div>
        </div>

        <div className="rowCreatePos">
          <div class="col-25-CreatePos">    
            <label className="lblJobResp">Responsibilities:</label>
          </div>
          <div className="col-75-CreatePos">
          <textarea name="txtAreaCPResp" rows="5" cols="50" type="text" placeholder="" ></textarea>

          </div>
        </div> 

        <div className="rowCreatePos">
          <div class="col-25-CreatePos">    
            <label className="lblSkillReq">Skill Requirements:</label>
          </div>
          <div className="col-75-CreatePos">
          <textarea name="txtAreaCPSkillsReq" rows="5" cols="50" type="text" placeholder="" ></textarea>

          </div>
        </div>

        <input className="btnPostPos" type="submit" value="Post Position" />
        <button className="btnCancelCreatePos" variant="btn btn-success" onClick={() => history.push('/CompanyProfile')}>Cancel</button>

        </form>
        
      </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default CreatePosition;
