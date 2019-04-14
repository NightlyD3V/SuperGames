import React, { useState } from 'react';
//React animations
import { useSpring, configring, animated } from 'react-spring';
import { Spring } from 'react-spring/renderprops';
//Material styles
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
//StyledComponents
import styled, { css } from 'styled-components';
//Material styles
const styles = {
    card: {
        minWidth: 275,
    },
};

const TopContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 50px;
    max-width: 90%;
    margin: 0 auto;
    padding: 10px;
`;

const HeaderStyle = styled.h1`
    
`;

const TextContainer = styled.p`
    display: flex;
    flex-direction: column;
`;

const Text = styled.h3`
    position: relative;
    top: 100px;
    color: white;
`;

const ButtonStyle = styled.button`
    max-width: 50%;
    color: red;
    @media(max-width: 1200px) {
        max-width: 100%;
    }
`;

export const Top = () => {
    const props = useSpring({ opacity: 1, from : {opacity: 0} })
    return (
        <TopContainer>
                <Spring  
                    from={{ opacity: 0 }}
                    to={{ opacity: 1 }}
                    config={{ delay: 1500, duration: 2000 }}
                >
                {props => (
                    <div style={props}>
                        <TopContainer>
                            <Card style={{ padding: '30px' }}className={ props.card }>
                                <HeaderStyle>Depression is hard...</HeaderStyle>
                                <TextContainer>
                                    <i style={props}>
                                        "I'm designing a game to help people cope with the pressure;
                                        give people suffering a small escape and hopefully raise awareness
                                        around the subject." -Tyler 
                                    </i>
                                    <br></br>
                                    <Spring  
                                        from={{ color: 'black' }}
                                        to={{ color: 'salmon' }}
                                        config={{ delay: 7000, duration: 1000 }}
                                    >
                                    {props => (
                                        <i style={props} class="material-icons">favorite</i>
                                    )}
                                    </Spring>
                                    <br></br>
                                </TextContainer>
                                <Button href="https://pioneer.app/join/GhostZero" style={{width: '40%'}}>Learn More</Button> 
                            </Card>
                        </TopContainer>
                    </div>
                )}
                </Spring>
        </TopContainer>
    )
}