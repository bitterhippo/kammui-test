import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//Screens
import Home from './Screens/Home';
import Registration from './Screens/Registration';
import About from './Screens/About';

//Components
import NavBar from './Components/NavBar';

const Landing = () => {
  return (
    <div style={styles.mainWrapper}>
      <Router>
        <NavBar ></NavBar>
        {/* pages need to be added here */}
        <Switch>
          <Route exact component={Home} pattern="/" />
          <Route exact component={About} pattern="/about" />
          <Route exact component={Registration} pattern="/registration" />
        </Switch>
      </ Router>
    </div>
  )
};

const styles = {
  mainWrapper: {

  }
};  

export default Landing;