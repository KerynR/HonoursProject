import React from 'react';
import './gradSubmissions.css';
import Footer from '../Footer';
import history from '../history';

function gradSubmissions() {

   

  return (
    <>
      <div class="gridGradSubmissions">
        <header className="gradSubmissionsHeader">
        Active Applications
        </header>

        <main className="gradSubmissionsWrapper">
        
        <div className="gradSubmissionsTable">
            <table >
                <thead>
                    <tr>
                        <th>Company Name</th>
                        <th>Job Title</th>
                        <th>Job Description</th>
                        <th>Location</th>
                        <th>Responsibilities</th>
                        <th>Start Date</th>
                        <th>Application Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><button className="btnDeleteApp" variant="btn btn-success" onClick={() => history.push('/Vacancies')}>Delete</button></td>                 
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>   
                        <td><button className="btnDeleteApp" variant="btn btn-success" onClick={() => history.push('/Vacancies')}>Delete</button></td>                 
                 
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td> 
                        <td><button className="btnDeleteApp" variant="btn btn-success" onClick={() => history.push('/Vacancies')}>Delete</button></td>                 
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td> 
                        <td><button className="btnDeleteApp" variant="btn btn-success" onClick={() => history.push('/Vacancies')}>Delete</button></td>                 
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td> 
                        <td><button className="btnDeleteApp" variant="btn btn-success" onClick={() => history.push('/Vacancies')}>Delete</button></td>                 

                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td> 
                        <td><button className="btnDeleteApp" variant="btn btn-success" onClick={() => history.push('/Vacancies')}>Delete</button></td>                 

                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td> 
                        <td><button className="btnDeleteApp" variant="btn btn-success" onClick={() => history.push('/Vacancies')}>Delete</button></td>                 

                    </tr>
                </tbody>
            </table>
            </div>
        </main>
        

        </div>
        <Footer/>
    </>
  );
}

export default gradSubmissions;
