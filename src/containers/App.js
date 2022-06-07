import React, { Component } from 'react';
import './App.css';
import ParticleBackGround from "../components/ParticleBackGround/ParticleBackGround";
import Navigation from '../components/Navigation/Navigation';
import Home from './Home/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ParticleBackGround/>
        <Navigation />
        <Home />
      </div>
    );
  }
}

export default App;
