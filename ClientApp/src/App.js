import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import reactDOM from "react-dom";

import Home from './components/pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
    return (
      <>
      <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
      </Router>
      </>
    );
}

export default App;
