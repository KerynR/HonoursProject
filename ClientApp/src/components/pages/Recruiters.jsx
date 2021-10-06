import React from 'react';
import './Recruiters.css';
import MainSection from '../MainSection';
import Footer from '../Footer';

function Recruiters() {
  return (
    <>
      <div class="gridRecruiters">
        <header className="RecruitersHeader">
        Recruiters
        </header>
       
        
        <main className="RecruitersWrapper">
        
        <br />
        <div className="tblRecruiters">
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>Remove</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>Remove</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>Remove</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>Remove</td>
                    </tr>            
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>Remove</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>Remove</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>Remove</td>
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

export default Recruiters;
