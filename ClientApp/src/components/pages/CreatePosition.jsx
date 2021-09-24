import React from 'react';
import './CreatePosition.css';
import Footer from '../Footer';

/* THIS WILL BE THE JOB VACANCY PAGE - WHERE THE EMPLOYER POSTS AN AVAILABLE POSITION */
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
            <label>Job Title:</label>
          </div>
          <div className="col-75">
            <input type="text" placeholder="..."  />
          </div>
        </div> 

        <div className="row">
          <div class="col-25">    
            <label>Job Description:</label>
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
            <label>Application Opening Date:</label>
          </div>
          <div className="col-75">
            <input type="date" placeholder="..."  />
          </div>
        </div> 

        <div className="row">
          <div class="col-25">    
            <label>Application Closing Date:</label>
          </div>
          <div className="col-75">
            <input type="date" placeholder="..."  />
          </div>
        </div>

        <div className="row">
          <div class="col-25">    
            <label>Job Starting Date:</label>
          </div>
          <div className="col-75">
            <input type="date" placeholder="..."  />
          </div>
        </div>

        <div className="row">
          <div class="col-25">    
            <label>Responsibilities:</label>
          </div>
          <div className="col-75">
            <input type="text" placeholder="..."  />
          </div>
        </div> 

        <div className="row">
          <div class="col-25">    
            <label>Skill Requirements:</label>
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
