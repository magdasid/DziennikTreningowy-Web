import React, { Component } from 'react';
import axios from 'axios';

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
                pathname: '/Protected'
            });
        });
    }
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>email</label>
                <input onChange={(event) => this.setState({ email: event.target.value })} type="text" name="email" autoComplete="username"/>
                <label>password</label>
                <input onChange={(event) => this.setState({ password: event.target.value })} type="password" name="password" autoComplete="current-password"/>
                <button type="submit">Log in</button>
            </form>
        );
    }
}

export default Login;