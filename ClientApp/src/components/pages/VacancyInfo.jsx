import React from 'react';
import './VacancyInfo.css';
import MainSection from '../MainSection';
import Footer from '../Footer';
import history from '../history';


function VacancyInfo() {
  return (
    <>
    <div form-wrapper>
    <div className="form-container">
      <div className="title_container">
            <h1>Vacancy Information</h1>
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
                        <label>Company Name:</label>
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
                        <input type="text" placeholder="..."  />
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
                        <label>Skill Name:</label>
                    </div>
                    <div className="col-75">
                        <input type="text" placeholder="..."  />
                    </div>
                </div>


                {/*ONLY VISIBLE TO COMPANY*/}
                <button className="btnDeleteVac">Delete Vacancy</button><br />
                <button className="btnEditVac" variant="btn btn-success" onClick={() => history.push('/EditVacancy')}>Edit Vacancy</button>

                {/*ONLY VISIBLE TO GRADUATE*/}
                <input type="file" /><br />
                <button className="btnApplyVac">Apply for Vacancy</button>
            
            </form>
        </div>
        </div>
        </div>

        <Footer/>
    </>
  );
}

export default VacancyInfo;
