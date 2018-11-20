import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navigation = styled.nav`
    height: 50px; 
    width: 100%;
    background-color: pink;
    position: fixed;
    top: 0;
`;

const Menu = () => {
    return(
        <Navigation>
            <ul>
                <li><Link to="/user/exercises">Moje treningi</Link></li>
                <li><Link to="/user/trainings">Moje ćwiczenia</Link></li>
                <li><Link to="/user/schemas">Moje schematy</Link></li>
                <li><Link to="/user/account">Moje konto</Link></li>
            </ul>
        </Navigation>
    );
}

export default Menu;