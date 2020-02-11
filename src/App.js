import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/header/header.component';
import HomePage from './pages/home/home-page.component';
import MobilePage from './pages/mobile/mobile-page.component';
import LoginPage from './pages/login/login-page.component.jsx';

import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/mobile" component={MobilePage} />
        <Route exact path="/home" component={HomePage} />
      </Switch>
    </BrowserRouter>
    
  );
}

export default App;
