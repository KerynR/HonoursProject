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
      </Switch>
      </Router>
      </>
    );
}

export default App;
