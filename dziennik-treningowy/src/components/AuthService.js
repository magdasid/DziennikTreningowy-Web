import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import getJWT from '../helpers/getJWT';

class AuthService extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: false
        }
    }
    componentDidMount() {
        const jwt = getJWT();
        if(!jwt) {
            this.props.history.push({ 
                pathname:'/Login'
            });
        }
        else {
            this.setState({
                user: true
            });
        }
    }
    render() {
        if(this.state.user === false) {
            return (
                <h1>Loading...</h1>
            );
        }
        return(
            <div>{this.props.children}</div>
        )
    }
}

export default withRouter(AuthService);