import React from 'react';
import './VacancyInfo.css';
import MainSection from '../MainSection';
import Footer from '../Footer';
import history from '../history';


function EditVacancy() {
  return (
    <>
    <div form-wrapper>
    <div className="form-container">
      <div className="title_container">
            <h1>Edit Vacancy</h1>
            <form>
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
                        <label>Location:</label>
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
                        <label>Sector:</label>
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
                        <input type="date" placeholder=""  />
                    </div>
                </div>

                <div className="row">
                    <div class="col-25">    
                        <label>Closing Date:</label>
                    </div>
                    <div className="col-75">
                        <input type="date" placeholder=""  />
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
                        <label>Skill Requirement:</label>
                    </div>
                    <div className="col-75">
                        <input type="text" placeholder="..."  />
                    </div>
                </div>


                {/*ONLY VISIBLE TO COMPANY*/}
                <button className="btnDeleteVac">Delete Vacancy</button><br />
                <button className="btnSaveVac" variant="btn btn-success" onClick={() => history.push('/Vacancies')}>Save Vacancy</button>
    
            </form>
        </div>
        </div>
        </div>

        <Footer/>
    </>
  );
}

export default EditVacancy;
