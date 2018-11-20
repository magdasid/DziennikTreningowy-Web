import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navigation = styled.nav`
    width: 100%;
    background-color: #FEE12B;
    top: 0;
`; 
const List = styled.ul`
    display: flex;
    align-content: center;
    list-style-type: none;
    margin: 0;
    padding: 0;
    top: 0; 
`;
const Item = styled.li`
    padding: 1.5% 2%;
    color: black;
`;
const MenuLink = styled(Link)`
    text-decoration: none;
    color: black;
`;

const Menu = () => {
    return(
        <Navigation>
            <List>
                <Item><MenuLink to="/user/exercises">Moje ćwiczenia</MenuLink></Item>
                <Item><MenuLink to="/user/trainings">Moje treningi</MenuLink></Item>
                <Item><MenuLink to="/user/schemas">Moje schematy</MenuLink></Item>
                <Item><MenuLink to="/user/account">Moje konto</MenuLink></Item>
            </List>
        </Navigation>
    );
}

export default Menu;