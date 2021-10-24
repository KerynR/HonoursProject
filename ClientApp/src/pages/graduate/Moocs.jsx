import React from 'react';
import './Moocs.css';
import Footer from '../../components/Footer';

function Moocs() {
  return (
    <>
      <div class="gridMoocs">
        <header className="moocsHeader">
        Massive Open Online Courses
        </header>
        <div className="searchMoocsTop">
          <div className="colLeftSearchMoocs">    
            <label className="lblSearchMoocs">Search for MOOCs:</label>
          </div>
          <div className="colRightSearchMoocs">
            <input type="text" placeholder=""  />
          </div>
        </div> 

        <main className="tblMoocsSearch">
        <table className="tblMoocs">
          <thead>
              <tr>
                <th>Company Name</th>
                <th>Link (Click to visit)</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
              </tr>            
              <tr>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
              </tr>
          </tbody>
        </table>
        {/*ADD CLICKABLE ICONS OF RECOMMENDED MOOCS*/}
        </main>

        <div className="moocIconsHeading">
          <h2>Click on an icon below to view popular MOOC providers:</h2>
        </div>
        
        <div className="section moocIconsGroup">
          <div className="colIcons">
            <a href="https://www.udemy.com/">
              <img src="./images/udemy(2).png" alt="" />
            </a>
          </div>
          <div className="colIcons">
            <a href="https://www.coursera.org/">
              <img src="./images/coursera(2).png" alt="" />
            </a>
          </div>
          <div className="colIcons">
            <a href="https://www.khanacademy.org/">
              <img src="./images/icons8-khan-academy-144.png" alt="" />
            </a>
          </div>
          <div className="colIcons">
            <a href="https://www.linkedin.com/learning-login/">
              <img src="./images/icons8-linkedin-144.png" alt="" />
            </a>
          </div>
          <div className="colIcons">
            <a href="https://www.udacity.com/">
              <img src="./images/udacity(1).png" alt="" />
            </a>
          </div>
        </div>
          
      
      </div>

        <Footer/>
    </>
  );
}

export default Moocs;
