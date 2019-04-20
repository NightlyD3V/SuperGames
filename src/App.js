import React, { Component } from 'react';
import './App.css';
//Components
import { Navbar } from './components/Navbar';
import { Top } from './components/Top';
import { Footer } from './components/Footer';
import TheGame from './components/TheGame';
//images 
import depression from './images/depression.jpg';
//Routing
import { Route, Link } from 'react-router-dom';
import styled from 'styled-components';

const Hero = styled.img`
  object-fit: cover;
  height: 100%;
  width: 30%;
  position: fixed;
  z-index: -1;
  display: flex;
  justify-content: center;
  align-items: center;
  @media(max-width: 1200px) {
    width: 100%;
  }
`
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Hero src={depression}/>
        <Footer/>
        <Route exact path='/' component={Top} />
        <Route exact path='/game' component={TheGame} />
      </div>
    );
  }
}

export default App;
