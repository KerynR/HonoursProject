import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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

function App() {
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
      
      </Switch>
      </Router>
      </>
    );
}

export default App;
