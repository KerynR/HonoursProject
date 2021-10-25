import React, {useState, Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import reactDOM from "react-dom";



import Login from './pages/globalPages/Login';
import Signup from './pages/globalPages/Signup';




import Settings from './components/pages/Settings';

import testing from './components/pages/testing';







import SubmissionDetails from './pages/admin/SubmissionDetails';





/* ========= GLOBAL PAGES ========= */
import Home from './pages/globalPages/Home';
import Contact from './pages/globalPages/Contact';
import About from './pages/globalPages/About';

/* ========= ADMIN & RECRUITER PAGES ========= */
import CreatePosition from './pages/admin/CreatePosition';
import ViewSubmissions from './pages/admin/ViewSubmissions';
import CompanyProfile from './pages/admin/CompanyProfile';
import EditCompanyProfile from './pages/admin/EditCompanyProfile';
import EditVacancy from './pages/admin/EditVacancy';
import Recruiters from './pages/admin/Recruiters';
import Vacancies from './pages/admin/Vacancies';
import gradSubmissions from './pages/admin/gradSubmissons';

import RecruiterProfile from './pages/admin/RecruiterProfile';
import EditRecruiterProfile from './pages/admin/EditRecruiterProfile';

/* ========= GRADUATE PAGES ========= */
import GraduateProfile from './pages/graduate/GraduateProfile';
import EditGradProfile from './pages/graduate/EditGradProfile';
import ApplyPosition from './pages/graduate/ApplyPosition';

import VacancyInfo from './pages/graduate/VacancyInfo';
import Moocs from './pages/graduate/Moocs';

/* ========= COMPONENTS ========= */
import Navbar from './components/Navbar';
import Footer from './components/Footer';

/*LIGHT/DARK THEME*/ 
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./components/globalStyles";
import { lightTheme, darkTheme } from "./components/Theme";

function App() {

  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
}

  return (
      <>      
      <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/Login' component={Login}/>
        <Route exact path='/Signup' component={Signup}/>
        <Route exact path='/EditGradProfile' component={EditGradProfile}/>
        <Route exact path='/CreatePosition' component={CreatePosition}/>
        <Route exact path='/ViewSubmissions' component={ViewSubmissions}/>
        <Route exact path='/GraduateProfile' component={GraduateProfile}/>
        <Route exact path ='/Settings' component={Settings}/>
        <Route exact path ='/ApplyPosition' component={ApplyPosition}/>
        <Route exact path ='/testing' component={testing}/>
        <Route exact path ='/EditCompanyProfile' component={EditCompanyProfile}/>
        <Route exact path ='/Moocs' component={Moocs}/>
        <Route exact path ='/CompanyProfile' component={CompanyProfile}/>
        <Route exact path='/Contact' component={Contact}/>
        <Route exact path='/About' component={About}/>
        <Route exact path='/Vacancies' component={Vacancies}/>
        <Route exact path='/VacancyInfo' component={VacancyInfo}/>
        <Route exact path='/EditVacancy' component={EditVacancy}/>
        <Route exact path='/SubmissionDetails' component={SubmissionDetails}/>
        <Route exact path='/Recruiters' component={Recruiters}/>
        <Route exact path='/RecruiterProfile' component={RecruiterProfile}/>
        <Route exact path ='/EditRecruiterProfile' component={EditRecruiterProfile}/>
        <Route exact path ='/gradSubmissions' component={gradSubmissions}/>

      </Switch>
      </Router>

      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
      <GlobalStyles/>

      <button onClick={themeToggler}>Switch Theme</button>

      </>
      </ThemeProvider>
      
      </>
    );
}

export default App;
