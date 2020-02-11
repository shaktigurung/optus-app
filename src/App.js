import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/header/header.component';
import HomePage from './pages/home/home-page.component';
import MobilePage from './pages/mobile/mobile-page.component';
import Login from './components/login/login.component';

import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/mobile" component={MobilePage} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
    
  );
}

export default App;
