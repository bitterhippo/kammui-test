import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//Components
import NavBar from './Components/NavBar';

const Landing = () => {
  return (
    <div>
      <Router>
        <NavBar ></NavBar>
        {/* pages need to be added here */}
        <Switch>
          <Route path="/" />
        </Switch>
      </ Router>
    </div>
  )
};

export default Landing;