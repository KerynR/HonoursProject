import React from 'react';
import './Moocs.css';
import MainSection from '../MainSection';
import Footer from '../Footer';

function Moocs() {
  return (
    <>
      <div class="gridMoocs">
        <header className="moocsHeader">
        Massive Open Online Courses (MOOCs)
        </header>
        <main>

        {/*<label className="">Search for MOOC:</label>
        <input type="text" className="moocInput"/>*/}

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
        </div>
        <Footer/>
    </>
  );
}

export default Moocs;
