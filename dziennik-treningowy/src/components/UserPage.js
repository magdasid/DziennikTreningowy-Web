import React from 'react';
import axios from 'axios';
import getJWT from '../helpers/getJWT';
import Menu from '../components/Menu';

class UserPage extends React.Component {
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
            console.log(this.state.user);
        }).catch(err => {
            localStorage.removeItem('cool-jwt');
            this.props.history.push('/');
        }); 
    }
    render() {
        return(
            <div>
                <Menu />
                <h1 style={{marginTop: '50px', backgroundColor: 'white', opacity: '0.7', textAlign: 'center'}}>
                    Witaj {this.state.user.firstName}!
                </h1>
            </div>
        )
    }
};

export default UserPage;