import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar'
import About from './containers/About'
import Landing from './containers/Landing'

import { Container } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Landing />
        <Container>
          {/* <About /> */}
        </Container>
      </div>
    );
  }
}

export default App;
