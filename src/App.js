import React from 'react';
// import { AppContainer, AppInner } from './styled'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Nav from './components/pages/Nav'
import './App.scss';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" />
      </Switch>
    </Router>
  );
}

export default App;
