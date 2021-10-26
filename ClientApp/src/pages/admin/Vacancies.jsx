import React, { useEffect, useState } from 'react';
import './Vacancies.css';
import Footer from '../../components/Footer';
import { isConstructorTypeNode } from 'typescript';
import axios, { Axios } from 'axios';
import { useHistory } from "react-router";
const apiUrl='https://localhost:44347/api/';
const http = axios;

function Vacancies() {
  const history = useHistory();
    const [vacancies,setVacancies] =useState(null)
    const [loading,setLoading]=useState(true)
    const [userId,setUserId] = useState(localStorage.getItem("roleId"))
    function  editVacancy(job) {
      localStorage.setItem("vacancyId",job.id)
      if(userId == 1){
        history.push("/VacancyInfo")
      }
      else{
        history.push("/EditVacancy")
      }
    }
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
                <label>Search:</label>
              </div>
              <div className="colRightSearch">
                <input className="txtSearchVac" type="text" placeholder=""  />
              </div>
            </div> 
    
            <div className="searchVacBtns">
              <button className="btnSearchVac">Search</button>
              <button className="btnClearVacSearch">Clear</button>
            </div>

            <main className="vacanciesWrapper">
            
            <div className="tblVacancies">
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
                <label>Search:</label>
              </div>
              <div className="colRightSearch">
                <input className="txtSearchVac" type="text" placeholder=""  />
              </div>
            </div> 
    
            <div className="searchVacBtns">
              <button className="btnSearchVac">Search</button>
              <button className="btnClearVacSearch">Clear</button>
            </div>

            <main className="vacanciesWrapper">
            
            <div>
                <table className="vacancyTable">
                    <thead>
                        <tr className="tblHeadingNames">
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
                            <tr onClick={()=>{editVacancy(job)}}>
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

            <div className="backVacBtn">
              <button 
                className="btnBackVac"
                onClick={() => {
                  history.push("/CompanyProfile");
                }}
                >
                  Back
              </button>
            </div>
            
    
            </div>
            <Footer/>
        </>
      );
}
  
}

export default Vacancies;
