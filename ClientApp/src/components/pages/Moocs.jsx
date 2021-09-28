import React from 'react';
import './Moocs.css';
import MainSection from '../MainSection';
import Footer from '../Footer';

function Moocs() {


  return (
    <>
    <h1>Massive Open Online Cources (MOOCs) <br />Recommended for You!</h1>
    <div className="grid-container">
      <div className="grid-item">
        <label>Seach for MOOC by provider:</label>  
        <input id="search" type="text" placeholder="Search by name or link"/>
        <button for="search" className="btnSearchMooc">Search</button>
      </div>
      <br /><br />
      <div className="grid-item">
        <table >
          <tr>
            <th>Company Name</th>
            <th>Cost</th>
            <th>Link (Click to visit)</th>
          </tr>
          <tr>
            <td>Coursera</td>
            <td>Subscrition (Limited Free Courses)</td>
            <td>https://www.coursera.org/</td>
          </tr>
          <tr>
            <td>edX</td>
            <td>Free (Certification Fee)</td>
            <td>https://www.edx.org/</td>
          </tr>
          <tr>
            <td>FutureLearn</td>
            <td>Free (Certification Fee)</td>
            <td>https://www.futurelearn.com/</td>
          </tr>
          <tr>
            <td>iMooX</td>
            <td>Free</td>
            <td>https://imoox.at/mooc/</td>
          </tr>
          <tr>
            <td>Khan Academy</td>
            <td>Free</td>
            <td>https://www.khanacademy.org/</td>
          </tr>
          <tr>
            <td>LinkedIn Learning</td>
            <td>Subscription (1 Month Free Trial)</td>
            <td>https://www.linkedin.com/learning/</td>
          </tr>
          <tr> 
            <td>Udemy</td>
            <td>Paid</td>
            <td>http://udemy.com/</td>
          </tr>
        </table>
      </div>
    </div>
    </>
  );
}

export default Moocs;
