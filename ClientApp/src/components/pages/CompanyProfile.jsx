import React from 'react';
import './CompanyProfile.css';
import MainSection from '../MainSection';
import Footer from '../Footer';

function CompanyProfile() {
  return (
    <>
<div className="gridCompProf">
    
<header className="companyHeader">
<i class="fa fa-user-circle" aria-hidden="true"></i>
    Company Profile</header>
<main className="leftGridComp"> 

<table className="tblCompPos">
    <tr>
        <th>Job Title</th>
        <th>Application Closing Date</th>
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
</table>
</main>
<aside className="RightCompProf">
<form className="CompanyForm">

    <div className="compRow">
        <div className="compColLeft">
            <label>Company Name:</label>
        </div>
        <div className="compColRight">
            <label>___________</label>
        </div>
    </div>

    <div className="compRow">
        <div className="compColLeft">
            <label>Sector:</label>
        </div>
        <div className="compColRight">
            <label>___________</label>
        </div>
    </div>

    <div className="compRow">
        <div className="compColLeft">
            <label>Vission:</label>
        </div>
        <div className="compColRight">
            <label>___________</label>
        </div>
    </div>
    <div className="compRow">
        <div className="compColLeft">
            <label>Mission:</label>
        </div>
        <div className="compColRight">
            <label>___________</label>
        </div>
    </div>
   
</form>
</aside>
</div>

<Footer/>
    </>
  );
}

export default CompanyProfile;
