import React from 'react';
import './EditCompanyProfile.css';
import Footer from '../Footer';
import history from '../history';

{/* COMPANY CAN EDIT THEIR DETAILS HERE */}

function EditCompanyProfile() {
  return (
    <>
        <div form-wrapper>
    <div className="form-container-EditComp">
      <div className="title_container-EditComp">
        <h1>Edit Company Profile</h1>
        <form >

        <div className="rowEditComp">
          <div className="col-25-EditComp">    
            <label className="lblCompNameEdit">Name:</label>
          </div>
          <div className="col-75-EditComp">
            <input type="text" placeholder=""  />
          </div>
        </div> 

        <div className="rowEditComp">
          <div className="col-25-EditComp">    
            <label className="lblSectorEdit">Sector:</label>
          </div>
          <div className="col-75-EditComp">
            <input type="text" placeholder=""  />
          </div>
        </div>
                     
        <div className="rowEditComp">
          <div className="col-25-EditComp">          
            <label className="lblVisionEdit">Vision:</label>
          </div>
          <div className="col-75-EditComp">
          <textarea name="txtAreaVision" rows="3" cols="50" type="text" placeholder="" ></textarea>

          </div>
        </div>

        <div className="rowEditComp">
          <div className="col-25-EditComp">          
            <label className="lblMissionEdit">Mission:</label>
          </div>
          <div className="col-75-EditComp">
          <textarea name="txtAreaMission" rows="5" cols="50" type="text" placeholder="" ></textarea>

          </div>
        </div>

        <input className="btnSaveCompProf" type="submit" value="Save" />
        <input className="btnDeleteCompProf" type="submit" value="Delete Profile" />
        <button className="btnCancelCompProf" variant="btn btn-success" onClick={() => history.push('/CompanyProfile')}>Cancel</button>

        </form>
        
      </div>
      </div>
    </div>
    <Footer/>
    </>
    
  );
}

export default EditCompanyProfile;
