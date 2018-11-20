import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import './App.css';
import AuthService from './components/AuthService';
import UserPage from './components/UserPage';
import Exercises from './components/Exercises';
import styled from 'styled-components';

const Container = styled.div`
  margin: 0 auto;
  padding: 0;
  background-color: #FFB73F;
  height: 100vh;
`;

class App extends Component {
  render() {
    return (
      <Container>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login}/>
            <AuthService>
              <Route path="/user" component={UserPage}/>
              <Route path="/user/exercises" component={Exercises}/>
            </AuthService>
          </Switch>
        </BrowserRouter>
      </Container>
    );
  }
}

export default App;
