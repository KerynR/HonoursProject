import React from 'react';
import './SubmissionDetails.css';
import Footer from '../Footer';


function SubmissionDetails() {
 
  return (
    <>
    <div class="gridSubDetails">
        <header className="viewSubDetailsHeader">
        Submission Details
        </header>
        <main>
          <table className="tblSubDetails">
            <thead>
              <tr>
                    <th>Job Title</th>                
                    <th>Application Closing Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                  <td><a href="/ViewSubmissions"></a></td>
                  <td></td>                
              </tr>
              <tr>
                  <td><a href="/ViewSubmissions"></a></td>
                  <td></td>     
              </tr>
              <tr>
                  <td><a href="/ViewSubmissions"></a></td>
                  <td></td>   
              </tr>
              <tr>
                  <td><a href="/ViewSubmissions"></a></td>
                  <td></td>            
              </tr>
              <tr>
                  <td><a href="/ViewSubmissions"></a></td>
                  <td></td>              
              </tr>
            </tbody>
          </table>
        </main>
        </div>
      <Footer/>
    </>
  );

  
}

export default SubmissionDetails;
