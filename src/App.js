import React from 'react';
import './App.css';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;

