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
        </main>
        </div>
        <Footer/>
    </>
  );
}

export default Moocs;
