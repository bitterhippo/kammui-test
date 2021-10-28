import React, { Suspense } from 'react';
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
import BackgroundImage from './Assets/BackgroundImage';
const LazyBackground = React.lazy(() => import("./Assets/BackgroundImage"));

const Landing = () => {
  return (
    <div style={styles.mainWrapper}>
      <Router>
        <Suspense fallback={<div>Background loading...</div>}>
          <LazyBackground />
        </Suspense>
        <NavBar />
        {/* pages need to be added here */}
        <Switch>
          <Route component={Home} exact path="/" />
          <Route component={About} exact path="/about" />
          <Route component={Registration} exact path="/registration" />
        </Switch>
      </ Router>
    </div>
  )
};

const styles = {
  mainWrapper: {}
};

export default Landing;