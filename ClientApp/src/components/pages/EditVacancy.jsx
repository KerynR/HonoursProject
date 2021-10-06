import React from 'react';
import './EditVacancy.css';
import Footer from '../Footer';
import history from '../history';

{/* COMPANY CAN EDIT JOB VACANCY HERE */}

function EditVacancy() {
  return (
    <>
    <div form-wrapper>
    <div className="form-container-editVac">
      <div className="title_container-editVac">
            <h1 className="editVacH1">Edit Vacancy</h1>
            <form>
                <div className="rowEditVac">
                    <div class="col-25-editVac">    
                        <label className="lblJobTitleVac">Job Title:</label>
                    </div>
                    <div className="col-75-editVac">
                        <input type="text" placeholder="..."  />
                    </div>
                </div>

                <div className="rowEditVac">
                    <div class="col-25-editVac">    
                        <label className="lblLocationVac">Location:</label>
                    </div>
                    <div className="col-75-editVac">
                        <input type="text" placeholder="..."  />
                    </div>
                </div>

                <div className="rowEditVac">
                    <div class="col-25-editVac">    
                        <label className="lblJobDescrVac">Job Description:</label>
                    </div>
                    <div className="col-75-editVac">
                    <textarea name="txtAreaJobDesc" rows="5" cols="50" type="text" placeholder="..." ></textarea>

                    </div>
                </div>

                <div className="rowEditVac">
                    <div class="col-25-editVac">    
                        <label className="lblSectorVac">Sector:</label>
                    </div>
                    <div className="col-75-editVac">
                        <input type="text" placeholder="..."  />
                    </div>
                </div>

                <div className="rowEditVac">
                    <div class="col-25-editVac">    
                        <label className="lblStartDateVac">Start Date:</label>
                    </div>
                    <div className="col-75-editVac">
                        <input Text type="date" placeholder=""  />
                    </div>
                </div>

                <div className="rowEditVac">
                    <div class="col-25-editVac">    
                        <label className="lblCloseDateVac">Closing Date:</label>
                    </div>
                    <div className="col-75-editVac">
                        <input type="date" placeholder=""  />
                    </div>
                </div>

                <div className="rowEditVac">
                    <div class="col-25-editVac">    
                        <label className="lblRespVac">Responsibilities:</label>
                    </div>
                    <div className="col-75-editVac">
                    <textarea name="txtAreaResp" rows="5" cols="50" type="text" placeholder="" ></textarea>
                    </div>
                </div>

                <div className="rowEditVac">
                    <div class="col-25-editVac">    
                        <label className="lblSkillReqVac">Skill Requirement:</label>
                    </div>
                    <div className="col-75-editVac">
                        <textarea name="txtAreaSR" rows="5" cols="50" type="text" placeholder="" ></textarea>
                    </div>
                </div>


                {/*ONLY VISIBLE TO COMPANY*/}
                <button className="btnDeleteVac">Delete Vacancy</button><br />
                <button className="btnSaveVac" variant="btn btn-success" onClick={() => history.push('/Vacancies')}>Save</button>
                <button className="btnCancelVac" variant="btn btn-success" onClick={() => history.push('/Vacancies')}>Cancel</button>

            </form>
        </div>
        </div>
        </div>

        <Footer/>
    </>
  );
}

export default EditVacancy;
