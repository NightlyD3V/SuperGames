import React from 'react';
//import GitHub
import GitHub from '../images/github.svg';
//routing
import { Route, Link } from 'react-router-dom';
//Material UI
import AppBar from '@material-ui/core/AppBar';
//Styled Components 
import styled from 'styled-components'

const NavContainer = styled.div`
    color: Black;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const LinkContainer = styled.div`
    display: flex;
    align-items: center;
`;

const Links = styled.a`
    text-decoration: none;
    color: black;
    padding: 20px;
`;

const Logo = styled.h1`
    margin-left: 20px;
`;

const GitHubLogo = styled.img`
    width: 40px;
    height: 40px;
    margin-right: 20px;
`;
export const Navbar = () => {
    return (
        <AppBar color="white">
            <NavContainer>
                <Logo>Super();</Logo>
                <LinkContainer>
                    <Link 
                        style={{ marginRight: '10px', textDecoration: 'none'}}
                        to="/">Home</Link>
                    <Link 
                        style={{ marginRight: '10px', textDecoration: 'none'}}
                        to="/game">Game</Link>
                    <a href="https://github.com/NightlyD3V"><GitHubLogo src={GitHub} /></a>
                </LinkContainer>
            </NavContainer>
        </AppBar>
    )
}