import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import './App.css';
import AuthService from './components/AuthService';
import UserPage from './components/UserPage';
import Exercises from './components/Exercises';
import Menu from './components/Menu';
import styled from 'styled-components';

const Container = styled.div`
  margin: 0 auto;
  padding: 0;
  background-color: white;
  height: 100vh;
`;

const Trainings = () => {
  return(
      <div>
          Twoje treningi
      </div>
  )
};
const Schemas = () => {
  return(
      <div>
          Twoje plany treningowe
      </div>
  )
};
const About = () => {
  return(
      <div>
          O Tobie
      </div>
  )
};
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
              <Route path="/user/trainings" component={Trainings}/>
              <Route path="/user/schemas" component={Schemas}/>
              <Route path="/user/account" component={About}/>
            </AuthService>
          </Switch>
        </BrowserRouter>
      </Container>
    );
  }
}

export default App;
