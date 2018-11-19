import React, { Component } from 'react';
import axios from 'axios';
import '../styles/Login.css';

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
            <div className="login-page">
                <form className="form" onSubmit={this.handleSubmit}>
                    <h2>Zaloguj się do systemu</h2>
                    <div className="form__field">
                        <input className="form__input" placeholder="username" onChange={(event) => this.setState({ email: event.target.value })} type="text" name="email" autoComplete="username"/>
                    </div>
                    <div className="form__field">
                        <input className="form__input" placeholder="password" onChange={(event) => this.setState({ password: event.target.value })} type="password" name="password" autoComplete="current-password"/>
                    </div>
                    <button className="button-submit" type="submit">Zaloguj się</button>
                </form>
            </div>
        );
    }
}

export default Login;