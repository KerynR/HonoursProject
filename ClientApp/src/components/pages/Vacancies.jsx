import React from 'react';
import './Vacancies.css';
import MainSection from '../MainSection';
import Footer from '../Footer';

function Vacancies() {
  return (
    <>
      <div class="gridVacancies">
        <header className="vacanciesHeader">
        Vacancies
        </header>
       
        
        <main className="vacanciesWrapper">
        <div className="searchTopGrid">
            Search
            <input type="text"  />
        </div>
        <br />
        <div>
            <table className="tblVacancies">
                <tr>
                    <th>Company Name</th>
                    <th>Sector</th>
                    <th>Job Title</th>
                    <th>Start Date</th>
                    <th>Total Vacancies</th>
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
                <td></td>
                    <td><a href="/CompanyProfile"></a></td>
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
                <td></td>
                    <td><a href="/CompanyProfile"></a></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </table>
            </div>
        </main>
        

        </div>
        <Footer/>
    </>
  );
}

export default Vacancies;
