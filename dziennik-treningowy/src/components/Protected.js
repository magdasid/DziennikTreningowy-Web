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
            this.props.history.push('/Login');
        }); 
    }
    render() {
        return(
            <div>
                Witaj {this.state.user.firstName}!
            </div>
        )
    }
};

export default Protected;