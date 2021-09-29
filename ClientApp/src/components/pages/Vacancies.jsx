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
        <main>
        <table className="tblVacancies">
            <tr>
                <th>Company Name</th>
                <th>Sector</th>
                <th>Positions Available</th>
                <th>Start Date</th>
            </tr>
            <tr>
                <td>Example 1</td>
                <td>Marketing</td>
                <td>10</td>
                <td>21/10/2021</td>
            </tr>
            <tr>
                <td>Example 2</td>
                <td>IT Support</td>
                <td>26</td>
                <td>20/12/2021</td>
            </tr>
            <tr>
                <td>Example 3</td>
                <td>IT Technician</td>
                <td>8</td>
                <td>15/10/2021</td>
            </tr>
            <tr>
                <td>Example 4</td>
                <td>Advertising</td>
                <td>5</td>
                <td>21/11/2021</td>
            </tr>            
            <tr>
                <td>Example 5</td>
                <td>Marketing</td>
                <td>10</td>
                <td>21/10/2021</td>
            </tr>
            <tr>
                <td>Example 6</td>
                <td>IT Support</td>
                <td>50</td>
                <td>20/12/2021</td>
            </tr>
            <tr>
                <td>Example 7</td>
                <td>IT Technician</td>
                <td>8</td>
                <td>15/10/2021</td>
            </tr>
            <tr>
                <td>Example 8</td>
                <td>Consultant</td>
                <td>1</td>
                <td>21/09/2021</td>
            </tr>
            <tr>
                <td>Example 9</td>
                <td>IT Technician</td>
                <td>8</td>
                <td>15/10/2021</td>
            </tr>
            <tr>
                <td>Example 10</td>
                <td>Sales</td>
                <td>16</td>
                <td>21/11/2022</td>
            </tr>
        </table>
        </main>
        
        <footer>
        Footer
        </footer>
        </div>
    </>
  );
}

export default Vacancies;
