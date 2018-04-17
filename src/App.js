import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar'
import About from './containers/About'
import Landing from './containers/Landing'
import Projects from './containers/Projects'
import Contact from './containers/Contact'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Landing />
        {/* <Navbar /> */}

        <About />
        <Projects />
        <Contact />

      </div>
    );
  }
}

export default App;
