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
<main className="leftGrid"> 

<table className="tblCompPos">
    <tr>
        <th>Position Name</th>
        <th>Start Date</th>
    </tr>
    <tr>
        <td>Position Name</td>
        <td>Position Start Date</td>
    </tr>
    <tr>
        <td>Position Name</td>
        <td>Position Start Date</td>
    </tr>
    <tr>
        <td>Position Name</td>
        <td>Position Start Date</td>
    </tr>
    <tr>
        <td>Position Name</td>
        <td>Position Start Date</td>
    </tr>
    <tr>
        <td>Position Name</td>
        <td>Position Start Date</td>
    </tr>
</table>
</main>
<aside className="RightCompProf">
    <ul>
        <h2>Ask us a question:</h2>
        <input type="text" /><br /><br />
        <button type="submit" className="btnAskQ">Send</button>
    </ul>
</aside>
</div>

<Footer/>
    </>
  );
}

export default CompanyProfile;
