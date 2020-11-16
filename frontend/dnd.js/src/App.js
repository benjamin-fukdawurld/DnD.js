import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { theme, styles } from './components/Theme';
import Box from '@material-ui/core/Box'
import { ThemeProvider, styled } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Navbar from "./components/Navbar.component"
import HomePage from "./components/HomePage.component"
import Races from "./components/Races"
import Classes from "./components/class/Classes.component"
import './App.css';

const AppContent = styled(Box)(styles.app_content);

function App() {
  return (<ThemeProvider theme={theme}>
    <CssBaseline />
    <Navbar />
    <AppContent>
      <Router>
        <Route path="/" exact component={HomePage} />
        <Route path="/races" exact component={Races.RaceList} />
        <Route path="/races/:id" exact component={Races.Race} />
        <Route path="/classes" exact component={Classes} />
      </Router>
    </AppContent>
  </ThemeProvider>
  );
}

export default App;
