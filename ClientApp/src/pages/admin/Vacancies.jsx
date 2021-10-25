import React, { useEffect, useState } from 'react';
import './Vacancies.css';
import Footer from '../../components/Footer';
import { isConstructorTypeNode } from 'typescript';
import axios, { Axios } from 'axios';

const apiUrl='https://localhost:44347/api/';
const http = axios;
function Vacancies() {
    const [vacancies,setVacancies] =useState(null)
    const [loading,setLoading]=useState(true)
    useEffect (() =>{
        try{
          http.get(`${apiUrl}Company/GetVacancies`).then((response)=>{
            setVacancies(response.data)
            debugger
          })
          .finally(()=>{
              setLoading(false); 
          })
        }
        catch(error){
          alert(error.message)
        }
      },[])
    
   
if(loading)
{
    return (
        <>
          <div class="gridVacancies">
            <header className="vacanciesHeader">
            Vacancies
            </header>
    
            <div className="searchTopGrid">
              <div className="colLeftSearch">    
                <label>Search for vancancy:</label>
              </div>
              <div className="colRightSearch">
                <input className="txtSearchVac" type="text" placeholder=""  />
              </div>
            </div> 
    
            <main className="vacanciesWrapper">
            
            <div>
                <table className="vacancyTable">
                    <thead>
                        <tr>
                            <th>Company Name</th>
                            <th>Sector</th>
                            <th>Job Title</th>
                            <th>Start Date</th>
                            <th>Total Vacancies</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><a href="/CompanyProfile"></a></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
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
else{
    return (
        <>
          <div class="gridVacancies">
            <header className="vacanciesHeader">
            Vacancies
            </header>
    
            <div className="searchTopGrid">
              <div className="colLeftSearch">    
                <label>Search for vancancy:</label>
              </div>
              <div className="colRightSearch">
                <input className="txtSearchVac" type="text" placeholder=""  />
              </div>
            </div> 
    
            <main className="vacanciesWrapper">
            
            <div>
                <table className="vacancyTable">
                    <thead>
                        <tr>
                            <th>Company Name</th>
                            <th>Sector</th>
                            <th>Job Title</th>
                            <th>Start Date</th>
                            <th>Total Vacancies</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        vacancies.map((job) =>{
                        return (
                            <tr >
                            <td>{job.companyName}</td>
                            <td>{job.sector}</td>
                            <td>{job.jobTitle}</td>
                            <td>{job.startDate}</td>
                            <td>{job.totalVac}</td>
                            </tr>
                        )
                        })
                    }
                    </tbody>
                </table>
                </div>
            </main>
            
    
            </div>
            <Footer/>
        </>
      );
}
  
}

export default Vacancies;
