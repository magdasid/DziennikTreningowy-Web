import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const LoginSection = styled.section`
    padding: 2%;
    background-color: white;
    opacity: 0.8;
    border-radius: 8px;
    text-align: center;
    position: absolute;
    top: 25%;
    right: 10%;
`;
const Title = styled.h1`
    font-size: 26px;
    color: black;
`;
const LoginInput = styled.input`
    padding: 10px 1px;
    margin: 8px 2px;
    border: 2px solid #FEE12B;
    width: 90%;
`;
const Button = styled.button`
    width: 20%;
    padding: 10px 1px;
    margin: 8px 2px;
    border-radius: 8px;
    background-color: ${props => props.inputColor || "#FEE12B"};
    border: 2px solid ${props => props.inputColor || "#FEE12B"};
`;

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = (event) => {
        event.preventDefault();
        axios.post('https://workoutdiaryapi-dev.azurewebsites.net/api/Authorization/Login', {
            username: this.state.email,
            password: this.state.password
        }).then(res => {
            localStorage.setItem('cool-jwt', res.data);
            this.props.history.push({
                pathname: '/user'
            });
        });
    }
    render() {
        return(
            <LoginSection>
                <Title>Zaloguj się do systemu</Title>
                <form onSubmit={this.handleSubmit}>
                    <LoginInput placeholder="username" onChange={(event) => this.setState({ email: event.target.value })} type="text" name="email" autoComplete="username"/>
                    <LoginInput placeholder="password" onChange={(event) => this.setState({ password: event.target.value })} type="password" name="password" autoComplete="current-password"/>
                    <Button inputColor="#FEE12B" type="submit">Zaloguj się</Button>
                </form>
            </LoginSection>
        );
    }
}

export default Login;