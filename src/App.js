import React from 'react';
// import { AppContainer, AppInner } from './styled'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Nav from './components/layout/Nav/Nav'
import './App.scss';
import Home from './components/Home';
import About from './components/pages/AboutPage/About';
import People from './components/pages/People/People';
import Origins from './components/pages/Origins';
import Footer from './components/pages/Footer/Footer';
import Griffin from './components/pages/Griffin';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/people" component={People} />
        <Route path="/origins" component={Origins} />
        <Route path="/griffin" component={Griffin} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
