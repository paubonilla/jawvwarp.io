import React from 'react';
// import { AppContainer, AppInner } from './styled'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Nav from './components/Nav'
import './App.scss';
import Home from './components/pages/HomePage/Home';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
