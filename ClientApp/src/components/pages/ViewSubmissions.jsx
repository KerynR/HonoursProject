import React from 'react';
import './ViewSubmissions.css';
import Footer from '../Footer';


function ViewSubmissions() {
 
  return (
    <>
    <div class="gridViewSub">
        <header className="viewSubsHeader">
        View Submissions
        </header>
        <main>
          <table className="tblViewSub">
          <tr>
                <th>Position Name</th>                
                <th>Start Date</th>
            </tr>
            <tr>
                <td>Example 1</td>
                <td>2021-09-30</td>                
            </tr>
            <tr>
                <td>Example 1</td>
                <td>2021-10-30</td>                
            </tr>
            <tr>
                <td>Example 1</td>
                <td>2021-10-12</td>                
            </tr>
            <tr>
                <td>Example 1</td>
                <td>2021-11-03</td>                
            </tr>
            <tr>
                <td>Example 1</td>
                <td>2021-11-21</td>                
            </tr>
          </table>
        </main>
        
        </div>
      <Footer/>
    </>
  );

  
}

export default ViewSubmissions;
