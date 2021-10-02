import React, {useState, Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import reactDOM from "react-dom";

import Home from './components/pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import EditProfile from './components/pages/EditProfile';
import CreatePosition from './components/pages/CreatePosition';
import ViewSubmissions from './components/pages/ViewSubmissions';
import GraduateProfile from './components/pages/GraduateProfile';
import Settings from './components/pages/Settings';
import ApplyPosition from './components/pages/ApplyPosition';
import testing from './components/pages/testing';
import EditCompanyProfile from './components/pages/EditCompanyProfile';
import Moocs from './components/pages/Moocs';
import CompanyProfile from './components/pages/CompanyProfile';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Vacancies from './components/pages/Vacancies';
import Apply from './components/pages/Apply';
import VacancyInfo from './components/pages/VacancyInfo';
import EditVacancy from './components/pages/EditVacancy';
import SubmissionDetails from './components/pages/SubmissionDetails';
import Recruiters from './components/pages/Recruiters';

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
        <Route exact path='/EditProfile' component={EditProfile}/>
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
        <Route exact path='/Apply' component={Apply}/>
        <Route exact path='/VacancyInfo' component={VacancyInfo}/>
        <Route exact path='/EditVacancy' component={EditVacancy}/>
        <Route exact path='/SubmissionDetails' component={SubmissionDetails}/>
        <Route exact path='/Recruiters' component={Recruiters}/>

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
