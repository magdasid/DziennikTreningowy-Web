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
            <h1 style={{backgroundColor: 'white', opacity: '0.7', textAlign: 'center'}}>
                Witaj {this.state.user.firstName}!
            </h1>
        )
    }
};

export default Protected;