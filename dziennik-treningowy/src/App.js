import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import './App.css';
import AuthService from './components/AuthService';
import Protected from './components/Protected';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login}/>
          <AuthService>
            <Route path="/Protected" component={Protected}/>
          </AuthService>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
