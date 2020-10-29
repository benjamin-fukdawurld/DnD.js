import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { theme } from './components/Common.component';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Navbar from "./components/Navbar.component"
import HomePage from "./components/HomePage.component"
import Races from "./components/RaceList.component"
import Race from "./components/Race.component"
import Classes from "./components/Classes.component"
import './App.css';

function App() {
  return (<ThemeProvider theme={theme}>
    <CssBaseline />
    <Navbar />
    <Router>
      <Route path="/" exact component={HomePage} />
      <Route path="/races" exact component={Races} />
      <Route path="/races/:id" exact component={Race} />
      <Route path="/classes" exact component={Classes} />
    </Router>
  </ThemeProvider>
  );
}

export default App;
