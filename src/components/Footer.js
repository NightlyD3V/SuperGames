import React from 'react';
//Styled Components
import styled from 'styled-components';
//Material UI

const FooterStyle = styled.p`
    position: fixed;
    width: 95%;
    bottom: 0px;
    color: black;
    margin: 1 auto;
    padding: 20px;
    @media(max-width: 1200px) {
        color: white;
      }
`;

export const Footer = () => {
    return (
        <FooterStyle>@GhostZero @Pioneer @LambdaSchool</FooterStyle>
    )
}