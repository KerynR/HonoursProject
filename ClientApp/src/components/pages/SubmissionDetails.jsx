import React from 'react';
import './ViewSubmissions.css';
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
          <tr>
                <th>Job Title</th>                
                <th>Application Closing Date</th>
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
            <tr>
                <td><a href="/ViewSubmissions"></a></td>
                <td></td>              
            </tr>
          </table>
        </main>
        </div>
      <Footer/>
    </>
  );

  
}

export default SubmissionDetails;
