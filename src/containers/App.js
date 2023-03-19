import React, { Component } from "react";
import "./App.css";
import ParticleBackGround from "../components/ParticleBackGround/ParticleBackGround";
import Navigation from "../components/Navigation/Navigation";
import Home from "./Home/Home";
import About from "./About/About";
import Experience from "./Experience/Experience";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import Footer from "../components/Footer/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton/ScrollToTopButton";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ParticleBackGround />
        <Navigation />
        <Home />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
        <ScrollToTopButton />
      </div>
    );
  }
}

export default App;
