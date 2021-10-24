import React from 'react';
import './ViewSubmissions.css';
import Footer from '../../components/Footer';
import history from '../../components/history';

{/** ONLY VISIBLE TO THE COMPANY AND COMPANY REP */}

function ViewSubmissions() {
 
  return (
    <>
    <div class="gridViewSub">
        <header className="viewSubsHeader">
        View Submissions
        </header>
        <main className="submissionsTbl">
          <table className="tblViewSub">
            <thead>
              <tr>
                    <th>First Name</th>                
                    <th>Last Name</th>
                    <th>Motivation</th>
                    <th>CV URL</th>
                    <th>Approve Application</th>
                    <th>Reject Application</th>

              </tr>
            </thead>
            <tbody>
              <tr>
                        
              </tr>
              <tr>
                  
              </tr>
              <tr>
                  
              </tr>
              <tr>
                       
              </tr>
              <tr>
                   
              </tr>
            </tbody>
          </table>
        </main>
        
        <div className="viewSubmissionsBtns">
          <button className="btnBackViewSub">
            Back
          </button>
        </div>

        </div>
      <Footer/>
    </>
  );

  
}

export default ViewSubmissions;
