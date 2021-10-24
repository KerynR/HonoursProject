import React, { useEffect, useState } from 'react';
import './Moocs.css';
import MainSection from '../MainSection';
import Footer from '../Footer';

import * as author from "firebase/auth";
import {firebase} from "../../firebase-config"
import { auth } from '../../firebase-config';
import axios, { Axios } from 'axios';

const http = axios;

//my clientId from google
const clientId = '619690593220-h60fclv6skikhfqajjpredm31mi54b2e.apps.googleusercontent.com';


const apiUrl='https://localhost:44347/api/'

function Moocs() {
  const[moocs,setMoocs]=useState(null);
  const[loading,setLoading]=useState(true);
  const[searchTerm,setSearch]=useState("")

  
  useEffect (() =>{
    try{
      http.get(`${apiUrl}User/GetMoocs`).then((response)=>{
        setMoocs(response.data)
        debugger
      })
      .finally(()=>{
        if(moocs != null){
          setLoading(false);
        }
      })
    }
    catch(error){
      alert(error.message)
    }
  },[])

  if(loading){
    return (
      <>
      <div class="gridMoocs">
        <header className="moocsHeader">
          Massive Open Online Courses
          </header>
          <div className="searchMoocsTop">
            <div className="colLeftSearchMoocs">    
              <label className="lblSearchMoocs">Search for MOOCs:</label>
            </div>
            <div className="colRightSearchMoocs">
              <input type="text" placeholder=""  />
            </div>
          </div> 
          <div className="moocIconsHeading">
            <h2>Click on an icon below to view popular MOOC providers</h2>
          </div>
          
          <div className="section moocIconsGroup">
            <div className="colIcons">
              <a href="https://www.udemy.com/">
                <img src="./images/udemy(2).png" alt="" />
              </a>
            </div>
            <div className="colIcons">
              <a href="https://www.coursera.org/">
                <img src="./images/coursera(2).png" alt="" />
              </a>
            </div>
            <div className="colIcons">
              <a href="https://www.khanacademy.org/">
                <img src="./images/icons8-khan-academy-144.png" alt="" />
              </a>
            </div>
            <div className="colIcons">
              <a href="https://www.linkedin.com/learning-login/">
                <img src="./images/icons8-linkedin-144.png" alt="" />
              </a>
            </div>
            <div className="colIcons">
              <a href="https://www.udacity.com/">
                <img src="./images/udacity(1).png" alt="" />
              </a>
            </div>
          </div>
      </div>
      <Footer/>
      </>
    )
  }
  else{
    return (
      <>
        <div class="gridMoocs">
          <header className="moocsHeader">
          Massive Open Online Courses
          </header>
          <div className="searchMoocsTop">
            <div className="colLeftSearchMoocs">    
              <label className="lblSearchMoocs">Search for MOOCs:</label>
            </div>
            <div className="colRightSearchMoocs">
              <input type="text" placeholder=""  />
            </div>
          </div> 
  
          <main className="tblMoocsSearch">
          <table className="tblMoocs">
            <thead>
                <tr>
                  <th>Company Name</th>
                  <th>Link (Click to visit)</th>
                </tr>
            </thead>
            <tbody>
              {
                moocs.map((course) =>{
                  return (
                    <tr >
                      <td>{course.moocName}</td>
                      <td href={course.moocUrl}>{course.moocUrl}</td>
                    </tr>
                  )
                })
              }
                
            </tbody>
          </table>
          {/*ADD CLICKABLE ICONS OF RECOMMENDED MOOCS*/}
          </main>
  
          <div className="moocIconsHeading">
            <h2>Click on an icon below to view popular MOOC providers</h2>
          </div>
          
          <div className="section moocIconsGroup">
            <div className="colIcons">
              <a href="https://www.udemy.com/">
                <img src="./images/udemy(2).png" alt="" />
              </a>
            </div>
            <div className="colIcons">
              <a href="https://www.coursera.org/">
                <img src="./images/coursera(2).png" alt="" />
              </a>
            </div>
            <div className="colIcons">
              <a href="https://www.khanacademy.org/">
                <img src="./images/icons8-khan-academy-144.png" alt="" />
              </a>
            </div>
            <div className="colIcons">
              <a href="https://www.linkedin.com/learning-login/">
                <img src="./images/icons8-linkedin-144.png" alt="" />
              </a>
            </div>
            <div className="colIcons">
              <a href="https://www.udacity.com/">
                <img src="./images/udacity(1).png" alt="" />
              </a>
            </div>
          </div>
            
        
        </div>
  
          <Footer/>
      </>
    );
  }

  
}

export default Moocs;
