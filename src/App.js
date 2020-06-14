import React from 'react';
import './sass/main.scss';

import '../node_modules/font-awesome/css/font-awesome.min.css'; 

import MainLayout from './layouts/MainLayout.js';
// import 'App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



import Welcome from './components/Welcome';
import About from './components/About';
import Showcase from './components/Showcase';
import Talks from './components/Talks';

// import { Welcome, About, Showcase, Talks } from './components'


function App() {
  return (
    <Router>
      <MainLayout>
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/showcase">
            <Showcase />
          </Route>
          <Route path="/talks">
            <Talks />
          </Route>
        </Switch>
      </MainLayout>
    </Router>
  );
} 

export default App;
