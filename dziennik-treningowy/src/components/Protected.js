import React from 'react';
import axios from 'axios';
import getJWT from '../helpers/getJWT';

class Protected extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: ''
        }
    }
    logOut = (event) => {
        event.preventDefault();
        localStorage.removeItem('cool-jwt');
        this.props.history.push('/');
    }
    componentDidMount() {
        const jwt = getJWT();
        axios.get('https://workoutdiaryapi-dev.azurewebsites.net/api/User/Informations', { headers: { Authorization: `Bearer ${jwt}` } })
        .then( res => { 
            this.setState({
                user: res.data
            })
        }).catch(err => {
            localStorage.removeItem('cool-jwt');
            this.props.history.push('/');
        }); 
    }
    render() {
        return(
            <div>
                <nav>
                    <ul>
                        <li>
                            Moje treningi
                        </li>
                        <li>
                            Moje ćwiczenia
                        </li>
                        <li>
                            Moje schematy
                        </li>
                        <li>
                            Moje konto
                        </li>
                        <li>
                            <button onClick={this.logOut}>Wyloguj się</button>
                        </li>
                    </ul>
                </nav>
                <h1 style={{backgroundColor: 'white', opacity: '0.7', textAlign: 'center'}}>
                    Witaj {this.state.user.firstName}!
                </h1>
            </div>
        )
    }
};

export default Protected;