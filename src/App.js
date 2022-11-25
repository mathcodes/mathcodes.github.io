import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { ThemeContext } from './contexts/ThemeContext';
import { Main, ProjectPage } from './pages';
import { BackToTop } from './components';
import ScrollToTop from './utils/ScrollToTop';
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
// import express from 'express'
import './App.css'
import { FormspreeProvider } from '@formspree/react';

dotenv.config()


function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme}>
      <FormspreeProvider project={process.env.YOUR_PROJECT_ID}>

      <Router>
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/projects" exact component={ProjectPage} />
          <Redirect to="/" />
        </Switch>
      </Router>
      <BackToTop />
      </FormspreeProvider>

    </div>
  );
}

export default App;