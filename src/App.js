import React from 'react';
import { AppContainer, AppInner } from './styled'
import './App.scss';
import styled from 'styled-components'

export const Nav = styled.div`
  width: 200px;
  ul {
    > li {
      background-color: red;
      padding: 10px;
    }
  }
`


function App() {
  return (
    <AppContainer>
      <AppInner>
        <Nav>
          <ul>
            <li>Home</li>
            <li>Memories</li>
            <li>About</li>
          </ul>
        </Nav>
      </AppInner>
    </AppContainer>
  );
}

export default App;
