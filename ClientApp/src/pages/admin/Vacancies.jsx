import React from 'react';
import './Vacancies.css';
import Footer from '../../components/Footer';
import history from '../../components/history';
import { useHistory } from "react-router";

function Vacancies() {

  const history = useHistory();

  return (
    <>
      <div class="gridVacancies">
        <header className="vacanciesHeader">
        Vacancies
        </header>

        <div className="searchTopGrid">
          <div className="colLeftSearch">    
            <label>Search for vancancy:</label>
          </div>
          <div className="colRightSearch">
            <input className="txtSearchVac" type="text" placeholder=""  />
          </div>
        </div> 

        <main className="vacanciesWrapper">
        
        <div>
            <table className="vacancyTable">
                <thead>
                    <tr>
                        <th>Company Name</th>
                        <th>Sector</th>
                        <th>Job Title</th>
                        <th>Start Date</th>
                        <th>Total Vacancies</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        
                    </tr>
                    <tr>
                        
                    </tr>
                    <tr>
                        
                    </tr>
                    <tr>
                       
                    </tr>
                    <tr>
                        
                    </tr>
                    <tr>
                        
                    </tr>
                    <tr>
                        
                    </tr>
                </tbody>
            </table>
            </div>
        </main>

        <div className="vacanciesBtns">
        <button 
          className="btnVacanciesBack" 
          onClick={() => {
            history.push("/CompanyProfile");
        }}
          >
            Back
          </button>
        </div>
        

        </div>
        <Footer/>
    </>
  );
}

export default Vacancies;
