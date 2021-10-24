import React from 'react';
import './VacancyInfo.css';
import Footer from '../../components/Footer';
import history from '../../components/history';


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
                        <label></label>
                    </div>
                </div>

                <div className="rowVacInfo">
                    <div class="col25VacInfo">    
                        <label>Company Name:</label>
                    </div>
                    <div className="col75VacInfo">
                    <label></label>
                    </div>
                </div>

                <div className="rowVacInfo">
                    <div class="col25VacInfo">    
                        <label>Location:</label>
                    </div>
                    <div className="col75VacInfo">
                    <label></label>
                    </div>
                </div>

                <div className="rowVacInfo">
                    <div class="col25VacInfo">    
                        <label>Job Description:</label>
                    </div>
                    <div className="col75VacInfo">
                    <label></label>
                    </div>
                </div>

                <div className="rowVacInfo">
                    <div class="col25VacInfo">    
                        <label>Sector:</label>
                    </div>
                    <div className="col75VacInfo">
                    <label></label>
                    </div>
                </div>

                <div className="rowVacInfo">
                    <div class="col25VacInfo">    
                        <label>Start Date:</label>
                    </div>
                    <div className="col75VacInfo">
                    <label></label>
                    </div>
                </div>

                <div className="rowVacInfo">
                    <div class="col25VacInfo">    
                        <label>Responsibilities:</label>
                    </div>
                    <div className="col75VacInfo">
                    <label></label>
                    </div>
                </div>

                <div className="rowVacInfo">
                    <div class="col25VacInfo">    
                        <label>Skill Name:</label>
                    </div>
                    <div className="col75VacInfo">
                    <label></label>
                    </div>
                </div>


                {/*ONLY VISIBLE TO GRADUATE*/}
                <label>Upload motivation:</label>
                <input type="file" /><br /><br />
                <label>Upload CV:</label>
                <input type="file" /><br /><br />
                <button className="btnApplyVac">Apply</button>
                <button className="btnCancelApplyVac">Cancel</button>


            </form>
        </div>
        </div>
        </div>

        <Footer/>
    </>
  );
}

export default VacancyInfo;
