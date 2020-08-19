import React from 'react';
import { AppContainer, AppInner } from './styled'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.scss';
import styled from 'styled-components'
import Home from './components/Home';
import People from './components/People';
import Header from './components/Header';
import About from './components/About';

export const Nav = styled.div`
  position: fixed;
  padding: 20px;
  width: 200px;
  display: flex;
  flex-direction: column;
  z-index: 10000;
`

export const Feed = styled.div`
  display: flex;
  flex-direction: column;
`

export const HeaderStyle = styled.div`
  height: 100vh;
  background: #EBECF1;
  color: #999;
  text-align: center;
`

export const AboutStyle = styled.div`
  height: 100vh;
  background: #206A5E;
  text-align: center;
`

function App() {
  return (
    <Router>
      <AppContainer>
        <AppInner>
          <Nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/people">People</Link>
            <Link to="/">Option 3</Link>
          </Nav>
          <Feed>
            <HeaderStyle>Header</HeaderStyle>
            <AboutStyle>About</AboutStyle>
          </Feed>
        </AppInner>
      </AppContainer>
    </Router>
  );
}

export default App;
