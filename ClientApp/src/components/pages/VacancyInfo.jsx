import React from 'react';
import './VacancyInfo.css';
import Footer from '../Footer';
import history from '../history';


function VacancyInfo() {
  return (
    <>
    <div form-wrapper>
    <div className="form-container-vacInfo">
      <div className="title_container-vacInfo">
            <h1>Vacancy Information</h1>
            <form>
                <div className="rowVacInfo">
                    <div class="col25VacInfo">    
                        <label>Job Title:</label>
                    </div>
                    <div className="col75VacInfo">
                        <input type="text" placeholder="..."  />
                    </div>
                </div>

                <div className="rowVacInfo">
                    <div class="col25VacInfo">    
                        <label>Company Name:</label>
                    </div>
                    <div className="col75VacInfo">
                        <input type="text" placeholder="..."  />
                    </div>
                </div>

                <div className="rowVacInfo">
                    <div class="col25VacInfo">    
                        <label>Location:</label>
                    </div>
                    <div className="col75VacInfo">
                        <input type="text" placeholder="..."  />
                    </div>
                </div>

                <div className="rowVacInfo">
                    <div class="col25VacInfo">    
                        <label>Job Description:</label>
                    </div>
                    <div className="col75VacInfo">
                        <input type="text" placeholder="..."  />
                    </div>
                </div>

                <div className="rowVacInfo">
                    <div class="col25VacInfo">    
                        <label>Sector:</label>
                    </div>
                    <div className="col75VacInfo">
                        <input type="text" placeholder="..."  />
                    </div>
                </div>

                <div className="rowVacInfo">
                    <div class="col25VacInfo">    
                        <label>Start Date:</label>
                    </div>
                    <div className="col75VacInfo">
                        <input type="text" placeholder="..."  />
                    </div>
                </div>

                <div className="rowVacInfo">
                    <div class="col25VacInfo">    
                        <label>Responsibilities:</label>
                    </div>
                    <div className="col75VacInfo">
                        <input type="text" placeholder="..."  />
                    </div>
                </div>

                <div className="rowVacInfo">
                    <div class="col25VacInfo">    
                        <label>Skill Name:</label>
                    </div>
                    <div className="col75VacInfo">
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
