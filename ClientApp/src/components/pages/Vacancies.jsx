import React from 'react';
import './Vacancies.css';
import MainSection from '../MainSection';
import Footer from '../Footer';
import { isConstructorTypeNode } from 'typescript';

function Vacancies() {

   

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
                        <td><a href="/CompanyProfile"></a></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td><a href="/CompanyProfile"></a></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td><a href="/CompanyProfile"></a></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td><a href="/CompanyProfile"></a></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td><a href="/CompanyProfile"></a></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td><a href="/CompanyProfile"></a></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td><a href="/CompanyProfile"></a></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            </div>
        </main>
        

        </div>
        <Footer/>
    </>
  );
}

export default Vacancies;
