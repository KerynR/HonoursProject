import React from 'react';
import './Moocs.css';
import MainSection from '../MainSection';
import Footer from '../Footer';

function Moocs() {
  return (
    <>
      <div class="gridMoocs">
        <header className="moocsHeader">
        Massive Open Online Courses
        </header>
        <div className="searchMoocsTop">
          <div className="colLeftSearchMoocs">    
            <label>Search for MOOCs:</label>
          </div>
          <div className="colRightSearchMoocs">
            <input type="text" placeholder=""  />
          </div>
        </div> 

        <main className="tblMoocsSearch">
        <table className="tblMoocs">
            <tr>
              <th>Company Name</th>
              <th>Cost</th>
              <th>Link (Click to visit)</th>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>            
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
        </table>
        {/*ADD CLICKABLE ICONS OF RECOMMENDED MOOCS*/}
        </main>

        <div className="moocIconsHeading">
          <h2>Click on an icon below to view popular MOOC providers</h2>
        </div>
        <div className="moocIcons">
          <label>Icons go here</label>
        </div>
        </div>

        <Footer/>
    </>
  );
}

export default Moocs;
